import type { SeoOverride } from "./seo-overrides.functions";
import { AUDIT_TITLES, brandTitle, canonicalPath } from "./seo-policy";

type Meta = Record<string, unknown>;
type Head = { meta?: any[]; links?: any[]; scripts?: any[] };

/** Route metadata and visible FAQ rendering share one canonical destination. */
export function applySeo<H extends Head>(head: H, loaderData: { seo: SeoOverride | null } | undefined): H {
  const seo = loaderData?.seo;
  const url = head.links?.find((l) => l.rel === "canonical")?.href;
  const path = url ? canonicalPath(new URL(url, "https://etichetetextile.ro").pathname) : seo?.path;
  const staticTitle = head.meta?.find((m) => "title" in m)?.title ?? "Etichett Prod";
  const title = brandTitle((path && AUDIT_TITLES[path]) || seo?.title || staticTitle);
  const storedDescription = seo?.description;
  const description = storedDescription && storedDescription.length >= 140 && storedDescription.length <= 155 && storedDescription.includes("Cere ofertă gratuită în 24h")
    ? storedDescription : head.meta?.find((m) => m.name === "description")?.content;
  const meta = (head.meta ?? []).map((m: Meta) => {
    if ("title" in m) return { title };
    if (m.property === "og:title" || m.name === "twitter:title") return { ...m, content: title };
    if (m.name === "description" || m.property === "og:description" || m.name === "twitter:description") return { ...m, content: description };
    return m;
  });
  if (!meta.some((m) => m.property === "og:type")) meta.push({ property: "og:type", content: "website" });
  if (!meta.some((m) => m.name === "twitter:card")) meta.push({ name: "twitter:card", content: "summary_large_image" });
  const image = meta.find((m) => m.property === "og:image")?.content;
  if (image && !meta.some((m) => m.name === "twitter:image")) meta.push({ name: "twitter:image", content: image });
  // PageLayout alone emits the merged FAQ schema from the visible questions.
  const scripts = (head.scripts ?? []).filter((s) => {
    if (s.type !== "application/ld+json") return true;
    try { return JSON.parse(s.children)?.["@type"] !== "FAQPage"; } catch { return true; }
  });
  return { ...head, meta, scripts };
}
