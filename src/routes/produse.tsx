import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/produse")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/produse" } }),
  component: Produse,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete textile — produse țesute & imprimate Cluj" },
      { name: "description", content: "Etichete pentru haine și branduri: țesute, imprimate, de compoziție, adezive, termoadezive. Producție Cluj-Napoca, livrare națională." },
      { property: "og:title", content: "Etichete textile — produse țesute & imprimate Cluj" },
      { property: "og:description", content: "Gamă completă de etichete: țesute, imprimate, de compoziție, autoadezive pentru îmbrăcăminte și branduri. Producător Cluj-Napoca." },
      { property: "og:url", content: "https://etichetetextile.ro/produse" },
      { property: "og:image", content: "https://etichetetextile.ro/images/products/etichete-tesute.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/produse" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Etichete textile — produse Etichett Prod",
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "Service", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"], name: "Etichete țesute", image: "https://etichetetextile.ro/images/products/etichete-tesute.jpg", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"] } },
            { "@type": "ListItem", position: 2, item: { "@type": "Service", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"], name: "Etichete imprimate", image: "https://etichetetextile.ro/images/products/etichete-imprimate.jpg", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"] } },
            { "@type": "ListItem", position: 3, item: { "@type": "Service", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"], name: "Etichete personalizate pentru branduri", image: "https://etichetetextile.ro/images/products/etichete-personalizate.jpg", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"] } },
            { "@type": "ListItem", position: 4, item: { "@type": "Service", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"], name: "Etichete de compoziție", image: "https://etichetetextile.ro/images/products/etichete-compozitie.jpg", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"] } },
            { "@type": "ListItem", position: 5, item: { "@type": "Service", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"], name: "Etichete autoadezive & autocolante", image: "https://etichetetextile.ro/images/products/etichete-branduri.jpg", serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: ["România", "Cluj-Napoca"] } },
          ],
        }),
      },
    ],
  }, loaderData),
});

const products = [
  {
    title: "Etichete țesute",
    img: "/images/products/etichete-tesute.jpg",
    features: ["Rezoluție clară HD", "Una sau mai multe culori", "În role sau tăiate", "Pliate", "Pot fi autoadezive"],
  },
  {
    title: "Etichete imprimate",
    img: "/images/products/etichete-imprimate.jpg",
    features: ["Imprimare pe bumbac, poliester, poliamidă, saten", "Cu siglă sau compoziție", "Mai multe culori", "Imprimare față-verso", "În role sau tăiate"],
  },
  {
    title: "Etichete personalizate pentru branduri",
    img: "/images/products/etichete-personalizate.jpg",
    features: ["Design adaptat brandului tău", "Finisaje premium", "Materiale variate", "Etichete pentru colecții complete"],
  },
  {
    title: "Etichete de compoziție",
    img: "/images/products/etichete-compozitie.jpg",
    features: ["Conforme cu reglementările", "Multiple limbi", "Simboluri de spălare", "Rezistente la temperaturi ridicate"],
  },
  {
    title: "Etichete adezive (autoadezive) & autocolante",
    img: "/images/products/etichete-branduri.jpg",
    features: ["Aplicare rapidă", "Suport flexibil pentru diverse materiale", "Imprimare HD", "Adeziv rezistent"],
  },
];

function Produse() {
  return (
    <PageLayout>
      <PageHero eyebrow="Produse" title="Etichete textile pentru orice produs" subtitle="De la proiectare și simulare grafică, până la livrarea produsului finit — gestionăm proiecte de orice complexitate." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="space-y-16">
          {products.map((p, i) => (
            <article key={p.title} className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <img src={p.img} alt={p.title} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">{p.title}</h2>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary"><Check className="h-4 w-4" /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Cere ofertă</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Explorează categoriile noastre</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Vezi pagini dedicate pentru fiecare tip de etichetă cu detalii tehnice, materiale și exemple:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              ["Etichete personalizate", "/etichete-personalizate"],
              ["Etichete textile", "/etichete-textile"],
              ["Etichete țesute", "/etichete-tesute"],
              ["Etichete satin", "/etichete-satin"],
              ["Etichete carton (hangtag)", "/etichete-carton"],
              ["Etichete adezive", "/etichete-autoadezive"],
              ["Etichete Cluj-Napoca", "/etichete-cluj"],
            ].map(([label, href]) => (
              <Link key={href} to={href} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
