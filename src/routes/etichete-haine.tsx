import { LabelGuide } from "@/components/LabelGuide";
import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ProductGallery } from "@/components/ProductGallery";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-haine")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-haine" } }),
  component: EticheteHaine,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete haine personalizate cu logo — de la 100 buc | Etichett Prod" },
      { name: "description", content: "Etichete haine personalizate cu logo, mărime și compoziție: țesute, satin sau termoadezive. Producător în Cluj-Napoca. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete haine, etichete pentru haine, etichete personalizate haine, etichete haine personalizate, etichete haine cu logo, etichete brand haine, etichete haine copii, etichete textile haine" },
      { property: "og:title", content: "Etichete pentru haine personalizate | Etichett Prod" },
      { property: "og:description", content: "Etichete pentru haine cu logo, compoziție și mărime — țesute, satin, termoadezive. Producător Cluj." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-haine" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-haine" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete pentru haine", item: "https://etichetetextile.ro/etichete-haine" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Etichete pentru haine personalizate",
          description: "Etichete pentru haine cu logo: țesute, satin, termoadezive, de compoziție și mărime.",
          serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image: "https://etichetetextile.ro/images/hero-labels.webp",
        }),
      },
    ],
  }, loaderData),
});

function EticheteHaine() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Haine"
        title="Etichete pentru haine personalizate cu logo"
        subtitle="Etichete pentru haine de brand, copii, lucru sau handmade — țesute, satin, termoadezive, de compoziție și mărime. Producător Cluj-Napoca."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete pentru haine</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <article>
            <h2 className="text-2xl font-bold">Etichete personalizate pentru haine — orice tip</h2>
            <p className="mt-3 text-muted-foreground">
              Realizăm <strong>etichete pentru haine</strong> cu logo, mărime, compoziție și instrucțiuni de spălare — pentru branduri de fashion, ateliere handmade, magazine de copii și companii cu uniforme. Alege tipul care se potrivește produsului tău.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Etichete haine cu logo brodat sau țesut",
                "Etichete de compoziție și mărime (cu simboluri spălare)",
                "Etichete termoadezive — fără cusături",
                "Etichete haine copii cu nume (rezistente la spălat)",
                "Rezistență la spălare 60–90°C",
                MINIMUM_SUMMARY,
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete haine <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Tipuri de etichete pentru haine</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Etichete țesute haine", "/etichete-tesute"],
                ["Etichete satin haine", "/etichete-satin"],
                ["Etichete termoadezive", "/etichete-termoadezive"],
                ["Etichete haine copii", "/etichete-haine-copii"],
                ["Etichete textile (compoziție)", "/etichete-textile"],
                ["Hangtag carton haine", "/etichete-carton"],
                ["Simboluri etichete haine", "/simboluri-etichete-haine"],
                ["Etichete personalizate", "/etichete-personalizate"],
              ].map(([t, h]) => (
                <Link key={t} to={h} className="rounded-xl border border-border p-3 text-sm hover:border-primary hover:text-primary">{t}</Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <ProductGallery
        title="Galerie etichete pentru haine — exemple reale"
        description="Etichete țesute, satin imprimat, compoziție și hangtag-uri produse în atelierul nostru din Cluj-Napoca."
        images={[
          { n: 1, alt: "Etichete țesute pentru haine cu logo brand" },
          { n: 3, alt: "Etichete satin imprimate pentru haine" },
          { n: 5, alt: "Etichete de compoziție cu simboluri de spălare" },
          { n: 7, alt: "Etichete cu mărime cusute pe haine" },
          { n: 9, alt: "Etichete personalizate pentru haine handmade" },
          { n: 12, alt: "Etichete textile în rolă pentru producție haine" },
          { n: 16, alt: "Etichete termoadezive pentru tricouri" },
          { n: 20, alt: "Hangtag carton pentru haine cu logo" },
        ]}
      />
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-haine"
        items={[
          { q: "Ce etichete trebuie să aibă o haină?", a: factualFaq('Ce etichete trebuie să aibă o haină?', 'Regulamentul UE 1007/2011 privește compoziția fibrelor pentru produsele din domeniul său de aplicare. Simbolurile ISO 3758 descriu întreținerea; logo-ul și mărimea au funcții distincte.', '/etichete-haine') },
          { q: "Care este diferența între etichete cusute și termoadezive?", a: factualFaq('Care este diferența între etichete cusute și termoadezive?', 'Etichetele cusute se atașează prin coasere și sunt clasice pentru fashion. Etichetele termoadezive se aplică la prese termice (130–160°C) și sunt ideale pentru tricouri, lenjerie și produse fără cusături.', '/etichete-haine') },
          { q: "Pot face etichete pentru haine copii cu nume?", a: factualFaq('Pot face etichete pentru haine copii cu nume?', 'Da. Producem etichete textile cu nume pentru hainele copiilor, rezistente la spălare repetată. Comanda minimă este 50 de bucăți cu același nume.', '/etichete-haine') },
          { q: "Etichetele cu logo pentru haine rezistă la spălare?", a: factualFaq('Etichetele cu logo pentru haine rezistă la spălare?', 'Da. Etichetele țesute pe damasc și cele din satin imprimat rezistă peste 50 de spălări la 60–90°C, fără decolorare.', '/etichete-haine') },
          { q: "Cât costă etichetele pentru haine?", a: factualFaq('Cât costă etichetele pentru haine?', 'De la 0,10 RON/bucată pentru etichete imprimate pe satin. Etichetele țesute pe damasc pornesc de la 0,15 RON/buc la 1000 buc.', '/etichete-haine') },
        ]}
      />
      <LabelGuide topic="haine și textile" />
    </PageLayout>
  );
}
