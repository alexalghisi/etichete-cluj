import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

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
          { path: "/etichete-saten", changefreq: "monthly", priority: "0.85" },
          { path: "/etichete-nylon", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-compozitie", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-carton", changefreq: "monthly", priority: "0.85" },
          { path: "/etichete-cluj", changefreq: "monthly", priority: "0.9" },
          { path: "/etichete-cluj-napoca", changefreq: "monthly", priority: "0.95" },
          { path: "/simboluri-etichete-haine", changefreq: "monthly", priority: "0.7" },
          { path: "/galerie", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
