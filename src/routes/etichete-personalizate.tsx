import { LabelGuide } from "@/components/LabelGuide";
import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LocalBusinessBlock } from "@/components/LocalBusinessBlock";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-personalizate")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-personalizate" } }),
  component: EtichetePersonalizate,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete personalizate — pentru haine & branduri | Etichett Prod" },
      { name: "description", content: "Etichete personalizate cu logo pentru haine și branduri: textile, țesute, satin și carton. Producție în Cluj-Napoca. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete personalizate, etichete personalizate haine, etichete cu logo, etichete brand, etichete personalizate cluj, etichete personalizate textile, etichete personalizate online, etichete personalizate pret" },
      { property: "og:title", content: "Etichete personalizate — pentru haine & branduri | Etichett Prod" },
      { property: "og:description", content: "Etichete personalizate cu logo, compoziție și mărime. Producător propriu în Cluj-Napoca." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-personalizate" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-personalizate" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete personalizate", item: "https://etichetetextile.ro/etichete-personalizate" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Etichete personalizate",
          description: "Etichete personalizate cu logo, text, compoziție și mărime — țesute, imprimate, satin, carton, autoadezive.",
          serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image: "https://etichetetextile.ro/images/hero-labels.webp",
        }),
      },
    ],
  }, loaderData),
});

const beneficii = [
  "Design inclus — trimiți schița, dezvoltăm grafica",
  MINIMUM_SUMMARY,
  "Mai multe materiale: damasc, satin, nylon, bumbac",
  "Rezistente la spălare 60–90°C",
  "Livrare în toată România",
  "Producător propriu — fără intermediari",
];

function EtichetePersonalizate() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Personalizate"
        title="Etichete personalizate cu logo — pentru brandul tău"
        subtitle="Etichete personalizate cu logo, text și compoziție pentru haine, încălțăminte, marochinărie, cosmetice și produse handmade — fabricate în Cluj-Napoca."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete personalizate</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <article>
            <h2 className="text-2xl font-bold">De ce etichete personalizate Etichett Prod?</h2>
            <p className="mt-3 text-muted-foreground">
              Producem <strong>etichete personalizate</strong> de peste 30 de ani pentru sute de branduri românești. Indiferent dacă ai nevoie de <em>etichete personalizate pentru haine</em>, cosmetice, vinuri, mobilier sau articole handmade, le realizăm exact pe forma, materialul și culorile dorite.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <ul className="mt-5 grid gap-2 text-sm">
              {beneficii.map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă personalizată <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Tipuri de etichete personalizate</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Etichete personalizate textile", "/etichete-textile"],
                ["Etichete personalizate țesute", "/etichete-tesute"],
                ["Etichete personalizate satin", "/etichete-satin"],
                ["Etichete personalizate carton", "/etichete-carton"],
                ["Etichete personalizate autoadezive", "/etichete-autoadezive"],
                ["Etichete personalizate haine", "/etichete-textile"],
              ].map(([t, h]) => (
                <Link key={t} to={h} className="rounded-xl border border-border p-3 text-sm hover:border-primary hover:text-primary">{t}</Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-personalizate"
        items={[
          { q: "Ce sunt etichetele personalizate?", a: factualFaq('Ce sunt etichetele personalizate?', 'Etichetele personalizate sunt etichete realizate cu logo, text și design propriu — țesute, imprimate, din satin, carton sau autoadezive. Folosite de branduri pentru identitate vizuală, compoziție, mărime și informații legale.', '/etichete-personalizate') },
          { q: "Care este cantitatea minimă pentru etichete personalizate?", a: factualFaq('Care este cantitatea minimă pentru etichete personalizate?', 'Producem etichete personalizate de la 100 de bucăți pentru majoritatea variantelor. Pentru etichete țesute pe damasc, comanda minimă recomandată este 500 buc.', '/etichete-personalizate') },
          { q: "Cât costă etichetele personalizate?", a: factualFaq('Cât costă etichetele personalizate?', 'Prețul etichetelor personalizate depinde de tip (țesute, imprimate, satin, carton), cantitate, dimensiune și numărul de culori. Trimite-ne logoul și îți facem ofertă în 24h.', '/etichete-personalizate') },
          { q: "În cât timp livrați etichete personalizate?", a: factualFaq('În cât timp livrați etichete personalizate?', 'Termenul standard este 5–10 zile lucrătoare de la aprobarea bunului de tipar. Pentru urgențe oferim regim accelerat (2–3 zile).', '/etichete-personalizate') },
          { q: "Etichetele personalizate rezistă la spălare?", a: factualFaq('Etichetele personalizate rezistă la spălare?', 'Da. Etichetele țesute și cele imprimate pe satin rezistă la spălare repetată la 60–90°C, fără decolorare sau deformare.', '/etichete-personalizate') },
        ]}
      />
      <LocalBusinessBlock keyword="Etichete personalizate Cluj-Napoca" />
      <LabelGuide topic="haine și textile" />
    </PageLayout>
  );
}
