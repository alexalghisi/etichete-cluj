import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export type BlogPost = {
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  content: string;
  keyword: string | null;
  published_at: string;
};

function publicClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
  if (!url || !key) return null;
  return createClient(url, key, {
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
}

export const getBlogPosts = createServerFn({ method: "GET" }).handler(async (): Promise<{ posts: BlogPost[] }> => {
  try {
    const sb = publicClient();
    if (!sb) return { posts: [] };
    const { data } = await sb
      .from("blog_posts")
      .select("slug,title,meta_description,excerpt,keyword,published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(100);
    return { posts: (data as unknown as BlogPost[]) ?? [] };
  } catch (e) {
    console.error("blog list failed", e);
    return { posts: [] };
  }
});

export const getBlogPost = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ slug: z.string().max(200) }).parse(d))
  .handler(async ({ data }): Promise<{ post: BlogPost | null }> => {
    try {
      const sb = publicClient();
      if (!sb) return { post: null };
      const { data: row } = await sb
        .from("blog_posts")
        .select("slug,title,meta_description,excerpt,content,keyword,published_at")
        .eq("slug", data.slug)
        .eq("published", true)
        .maybeSingle();
      return { post: (row as unknown as BlogPost | null) ?? null };
    } catch (e) {
      console.error("blog post read failed", e);
      return { post: null };
    }
  });
