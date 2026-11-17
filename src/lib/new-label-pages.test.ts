import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { NEW_LABEL_PAGES } from "./new-label-content";
import { PAGE_CONTENT_MODIFIED } from "./content-modified";
import { relevantProducts } from "./product-links";
import { seoDescription } from "./seo-policy";

const NEW = [
  "etichete-imprimate",
  "etichete-brodate",
  "sigle-textile",
  "etichete-impermeabile",
  "etichete-industriale",
] as const;
const KEYWORDS: Record<(typeof NEW)[number], RegExp> = {
  "etichete-imprimate": /imprimare etichete textile/i,
  "etichete-brodate": /etichete brodate/i,
  "sigle-textile": /sigle textile/i,
  "etichete-impermeabile": /etichete impermeabile/i,
  "etichete-industriale": /etichete industriale/i,
};
const read = (p: string) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");

describe("keyword landing pages", () => {
  it.each(NEW)("%s targets its keyword in title, H1 and body", (slug) => {
    const page = NEW_LABEL_PAGES[slug];
    const body = page.sections.map(([h, t]) => `${h} ${t}`).join(" ");
    expect(`${page.title} ${page.h1}`.toLowerCase()).toMatch(/etichete|sigle/);
    expect(`${page.h1} ${body}`).toMatch(KEYWORDS[slug]);
    expect(body.split(/\s+/).length).toBeGreaterThan(300);
  });

  it("titles and H1s are unique across all label pages", () => {
    const all = Object.values(NEW_LABEL_PAGES);
    expect(new Set(all.map((p) => p.title)).size).toBe(all.length);
    expect(new Set(all.map((p) => p.h1)).size).toBe(all.length);
  });

  it.each(NEW)("%s description normalises to 140–155 chars with CTA", (slug) => {
    const d = seoDescription(NEW_LABEL_PAGES[slug].description);
    expect(d.length).toBeGreaterThanOrEqual(140);
    expect(d.length).toBeLessThanOrEqual(155);
  });

  it.each(NEW)("%s has a route, sitemap entry, lastmod and known-route entry", (slug) => {
    expect(read(`routes/${slug}.tsx`)).toMatch(new RegExp(`createFileRoute\\(["']/${slug}["']\\)`));
    expect(read("routes/sitemap[.]xml.ts")).toContain(`'/${slug}'`);
    expect(PAGE_CONTENT_MODIFIED[`/${slug}`]).toBeTruthy();
    expect(read("routes/$.tsx")).toContain(`"${slug}"`);
  });

  it("legacy redirects never shadow a live page", () => {
    const src = read("routes/$.tsx");
    const map = src.slice(src.indexOf("const REDIRECTS"), src.indexOf("const KNOWN_ROUTES"));
    for (const slug of NEW) expect(map).not.toMatch(new RegExp(`^\\s*"${slug}":`, "m"));
  });

  it("FAQs never promise prices, minimums or deadlines outside business-facts", () => {
    for (const slug of NEW) {
      for (const f of NEW_LABEL_PAGES[slug].faq)
        expect(f.a).not.toMatch(/\d+\s*(?:lei|ron|zile|buc)/i);
    }
  });

  it("blog auto-links route specific terms to the new pages", () => {
    expect(relevantProducts("logo brodat pe hanorac").map((p) => p.to)).toContain(
      "/etichete-brodate",
    );
    expect(relevantProducts("etichete pentru geci impermeabile").map((p) => p.to)).toContain(
      "/etichete-impermeabile",
    );
    expect(relevantProducts("uniforme pentru echipamente de lucru").map((p) => p.to)).toContain(
      "/etichete-industriale",
    );
  });
});

describe("interactive media", () => {
  it("every label page has at least 4 real gallery photos that exist on disk", () => {
    for (const [slug, page] of Object.entries(NEW_LABEL_PAGES)) {
      expect(page.gallery.length, slug).toBeGreaterThanOrEqual(4);
      for (const img of page.gallery) {
        expect(() =>
          readFileSync(new URL(`../../public${img.src}`, import.meta.url)),
        ).not.toThrow();
        expect(img.alt.length).toBeGreaterThan(10);
      }
    }
  });
});
