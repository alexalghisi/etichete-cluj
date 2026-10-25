import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export type SeoFaq = { q: string; a: string };
export type SeoLink = { to: string; label: string };
export type SeoOverride = {
  path: string;
  title: string | null;
  description: string | null;
  h1: string | null;
  intro: string | null;
  faqs: SeoFaq[];
  links: SeoLink[];
};

// Short-lived per-isolate cache: overrides change at most daily, so this avoids a
// database round trip on every SSR request without delaying updates noticeably.
const SEO_CACHE_TTL_MS = 5 * 60 * 1000;
const seoCache = new Map<string, { at: number; seo: SeoOverride | null }>();

export const getSeoOverride = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ path: z.string().max(200) }).parse(d))
  .handler(async ({ data }): Promise<{ seo: SeoOverride | null }> => {
    const cached = seoCache.get(data.path);
    if (cached && Date.now() - cached.at < SEO_CACHE_TTL_MS) return { seo: cached.seo };
    try {
      const url = process.env["SUPABASE_URL"];
      const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
      if (!url || !key) return { seo: null };
      const sb = createClient(url, key, {
        auth: { persistSession: false },
        global: {
          fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          },
        },
      });
      const { data: row, error } = await sb
        .from("seo_overrides")
        .select("path,title,description,h1,intro,faqs,links")
        .eq("path", data.path)
        .eq("active", true)
        .maybeSingle();
      const seo = (row as SeoOverride | null) ?? null;
      if (!error) {
        if (seoCache.size > 500) seoCache.clear();
        seoCache.set(data.path, { at: Date.now(), seo });
      }
      return { seo };
    } catch (e) {
      console.error("seo override read failed", e);
      return { seo: null };
    }
  });
