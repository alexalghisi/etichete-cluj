import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PAGE_CONTENT_MODIFIED, latestContentDate } from "@/lib/content-modified";

const BASE_URL = "https://etichetetextile.ro";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...['/cere-oferta','/generator-eticheta-compozitie','/etichete-bumbac','/embleme-tesute','/etichete-marime','/producator-etichete','/tricouri-personalizate-cluj','/imprimare-textile-cluj','/sepci-personalizate','/broderie-cluj'].map(path=>({path,changefreq:'monthly' as const,priority:'0.8'})),
          ...['/tipografie-cluj','/panglici-personalizate','/etichete-alimentare','/etichete-borcane-sticle','/etichete-coduri-qr','/stickere-personalizate','/carti-de-vizita-cluj','/flyere-cluj','/indicatoare-avertizare','/imprimare-accesorii-personalizate'].map(path=>({path,changefreq:'monthly' as const,priority:'0.85'})),
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/despre-noi", changefreq: "monthly", priority: "0.7" },
          { path: "/produse", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-textile", changefreq: "monthly", priority: "0.95" },
          { path: "/etichete-personalizate", changefreq: "monthly", priority: "0.95" },
          { path: "/etichete-haine", changefreq: "monthly", priority: "0.95" },
          { path: "/etichete-autocolante", changefreq: "monthly", priority: "0.95" },
          { path: "/etichete-autoadezive", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-termoadezive", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-haine-copii", changefreq: "monthly", priority: "0.85" },
          { path: "/etichete-tesute", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-satin", changefreq: "monthly", priority: "0.85" },
          { path: "/etichete-nylon", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-compozitie", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-carton", changefreq: "monthly", priority: "0.85" },
          { path: "/etichete-cluj", changefreq: "monthly", priority: "0.9" },
          { path: "/simboluri-etichete-haine", changefreq: "monthly", priority: "0.7" },
          { path: "/galerie", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
        ];
        const { publicContentClient, publishedPosts } = await import("@/lib/blog-data.server");
        const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        // Use recorded significant edits and DB timestamps, never a generation-time fallback.
        const { data: overrides, error } = await publicContentClient().from("seo_overrides")
          .select("path,last_changed_at").eq("active", true).not("last_changed_at", "is", null);
        if (error) throw new Error("Sitemap content timestamps could not be read");
        const modified = new Map(Object.entries(PAGE_CONTENT_MODIFIED));
        for (const row of overrides ?? []) {
          const date = latestContentDate(modified.get(row.path), row.last_changed_at);
          if (date) modified.set(row.path, date);
        }
        const posts = await publishedPosts("slug,published_at,content_updated_at");
        const blogDate = latestContentDate(modified.get("/blog"), ...posts.map((p) => p.content_updated_at ?? p.published_at));
        if (blogDate) modified.set("/blog", blogDate);
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>${modified.get(e.path) ? `\n    <lastmod>${escape(modified.get(e.path) ?? "")}</lastmod>` : ""}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        for (const p of posts) {
          urls.push(`  <url>\n    <loc>${BASE_URL}/blog/${escape(p.slug)}</loc>\n    <lastmod>${escape(p.content_updated_at ?? p.published_at)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
