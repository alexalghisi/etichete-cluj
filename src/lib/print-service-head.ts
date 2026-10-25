import { PRINT_SERVICE_BY_SLUG } from "./print-services-content";

const BASE = "https://etichetetextile.ro";

/** Shared head (meta, canonical, breadcrumb + Service schema) for print-service routes. */
export function printServiceHead(slug: string) {
  const p = PRINT_SERVICE_BY_SLUG[slug];
  const url = `${BASE}/${slug}`;
  const description = p.description;
  const image = `${BASE}/images/hero-labels.webp`;
  return {
    meta: [
      { title: p.title },
      { name: "description", content: description },
      { name: "keywords", content: p.keywords },
      { property: "og:title", content: p.title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${BASE}/` },
            { "@type": "ListItem", position: 2, name: "Tipografie și etichete", item: `${BASE}/tipografie-cluj` },
            { "@type": "ListItem", position: 3, name: p.h1, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.h1,
          description,
          serviceType: p.eyebrow.replace("Nou · ", ""),
          provider: { "@id": `${BASE}/#business` },
          areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image,
          url,
        }),
      },
    ],
  };
}
