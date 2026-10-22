import { createClient } from "@supabase/supabase-js";

export function publicContentClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
  if (!url || !key) throw new Error("Public content is not configured");
  return createClient(url, key, {
    auth: { persistSession: false },
    global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
      headers.set("apikey", key);
      return fetch(input, { ...init, headers });
    } },
  });
}

export async function publishedPosts(columns: string) {
  const client = publicContentClient();
  const posts: Record<string, any>[] = [];
  const pageSize = 500;
  for (let offset = 0; ; offset += pageSize) {
    const { data, error } = await client.from("blog_posts").select(columns).eq("published", true)
      .order("published_at", { ascending: false }).order("slug").range(offset, offset + pageSize - 1);
    if (error) throw new Error("Published articles could not be read");
    const rows = (data ?? []) as unknown as Record<string, any>[];
    posts.push(...rows);
    if (rows.length < pageSize) return posts;
  }
}