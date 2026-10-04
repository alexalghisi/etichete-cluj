import type { SeoOverride } from "./seo-overrides.functions";

type Meta = Record<string, unknown>;
type Head = { meta?: Meta[]; links?: unknown[]; scripts?: { type?: string; children?: string }[] };

/** Applies the database SEO override (if any) on top of the route's static head. */
export function applySeo(head: Head, loaderData: { seo: SeoOverride | null } | undefined): Head {
  const seo = loaderData?.seo;
  if (!seo) return head;
  const meta = (head.meta ?? []).map((m) => {
    if (seo.title && ("title" in m || m["property"] === "og:title" || m["name"] === "twitter:title"))
      return "title" in m ? { title: seo.title } : { ...m, content: seo.title };
    if (seo.description && (m["name"] === "description" || m["property"] === "og:description" || m["name"] === "twitter:description"))
      return { ...m, content: seo.description };
    return m;
  });
  const scripts = [...(head.scripts ?? [])];
  if (seo.faqs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    });
  }
  return { ...head, meta, scripts };
}
