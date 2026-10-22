import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { factualText } from './business-facts';

export type BlogPost = {
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  content: string;
  keyword: string | null;
  published_at: string;
  content_updated_at: string | null;
};

export const getBlogPosts = createServerFn({ method: "GET" }).handler(async (): Promise<{ posts: BlogPost[] }> => {
  const { publishedPosts } = await import("./blog-data.server");
  const posts = await publishedPosts("slug,title,meta_description,excerpt,keyword,published_at,content_updated_at");
  return { posts: posts as BlogPost[] };
});

export const getBlogPost = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ slug: z.string().max(200) }).parse(d))
  .handler(async ({ data }): Promise<{ post: BlogPost | null; related: BlogPost[] }> => {
    const { publicContentClient, publishedPosts } = await import("./blog-data.server");
    const { data: row, error } = await publicContentClient().from("blog_posts")
      .select("slug,title,meta_description,excerpt,content,keyword,published_at,content_updated_at")
      .eq("slug", data.slug).eq("published", true).maybeSingle();
    if (error) throw new Error("Article could not be read");
    if (!row) return { post: null, related: [] };
    const post = { ...row, content: factualText(row.content), excerpt: factualText(row.excerpt) } as BlogPost;
    const all = await publishedPosts("slug,title,meta_description,excerpt,keyword,published_at,content_updated_at");
    const words = new Set(`${post.keyword ?? ""} ${post.title}`.toLowerCase().split(/\W+/).filter((w) => w.length > 3));
    const score = (p: Record<string, any>) => `${p.keyword ?? ""} ${p.title}`.toLowerCase().split(/\W+/).filter((w) => words.has(w)).length;
    const related = all.filter((p) => p.slug !== post.slug).sort((a, b) => score(b) - score(a)).slice(0, 3) as BlogPost[];
    return { post, related };
  });
