import { describe, expect, it } from "vitest";
import { canonicalPath, mergeFaqs, protectedSeoField, seoDescription } from "./seo-policy";
import { relevantProducts, normalizeArticleLinks } from "./product-links";
import { latestContentDate } from "./content-modified";

describe("Canonical consolidation", () => {
  it("consolidates saten into satin", () => expect(canonicalPath("/etichete-saten/")).toBe("/etichete-satin"));
  it("consolidates Cluj-Napoca into Cluj", () => expect(canonicalPath("/etichete-cluj-napoca")).toBe("/etichete-cluj"));
  it("normalizes contact trailing slash", () => expect(canonicalPath("/contact/")).toBe("/contact"));
});
it("merges duplicate questions once", () => {
  expect(mergeFaqs([{ q: "Ce sunt etichetele?", a: "Textile." }], [{ q: "Ce sunt etichetele?", a: "Duplicate." }, { q: "Livrați?", a: "Da." }])).toHaveLength(2);
});
it("preserves editorial homepage H1", () => {
  expect(protectedSeoField("/", "h1")).toBe(true);
  expect(protectedSeoField("/contact", "intro")).toBe(false);
});
it("gives articles three unique relevant product destinations", () => {
  const links = relevantProducts("etichete termoadezive pentru haine");
  expect(links).toHaveLength(3);
  expect(links[0].to).toBe("/etichete-termoadezive");
  expect(new Set(links.map((l) => l.to)).size).toBe(3);
});
it("normalizes legacy links in article content", () => {
  expect(normalizeArticleLinks('<a href="/etichete-saten">saten</a>')).toBe('<a href="/etichete-satin">saten</a>');
});
it("selects authoritative timestamps without inventing a fallback", () => {
  expect(latestContentDate(null, undefined)).toBeUndefined();
  expect(latestContentDate("2026-10-04T00:00:00Z", "2026-10-22T01:10:58Z")).toBe("2026-10-22T01:10:58Z");
});
it("keeps meta descriptions within 140–155 characters with the requested CTA", () => {
  const description = seoDescription("Ghid practic: cum alegi etichetele textile potrivite — țesute, satin sau imprimate — în funcție de țesătură, spălare și buget. Sfaturi de la un producător cu experiență din 1993.");
  expect(description.length).toBeGreaterThanOrEqual(140);
  expect(description.length).toBeLessThanOrEqual(155);
  expect(description).toContain("Cere ofertă gratuită în 24h");
});