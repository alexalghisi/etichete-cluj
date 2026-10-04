import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ProductGallery } from "@/components/ProductGallery";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-haine")({
  loader: () => getSeoOverride({ data: { path: "/etichete-haine" } }),
  component: EticheteHaine,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete haine personalizate cu logo — de la 100 buc | ETICHETT" },
      { name: "description", content: "Etichete haine personalizate cu logo: țesute, satin, termoadezive, compoziție și mărime. Vezi galeria cu exemple reale. Producător Cluj-Napoca, 30+ ani." },
      { name: "keywords", content: "etichete haine, etichete pentru haine, etichete personalizate haine, etichete haine personalizate, etichete haine cu logo, etichete brand haine, etichete haine copii, etichete textile haine" },
      { property: "og:title", content: "Etichete pentru haine personalizate | ETICHETT" },
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
          "@type": "Product",
          name: "Etichete pentru haine personalizate",
          description: "Etichete pentru haine cu logo: țesute, satin, termoadezive, de compoziție și mărime.",
          brand: { "@type": "Brand", name: "Etichett Prod" },
          image: "https://etichetetextile.ro/images/hero-labels.webp",
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "0.10", highPrice: "2.00", offerCount: "12", availability: "https://schema.org/InStock" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "143" },
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
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Etichete haine cu logo brodat sau țesut",
                "Etichete de compoziție și mărime (cu simboluri spălare)",
                "Etichete termoadezive — fără cusături",
                "Etichete haine copii cu nume (rezistente la spălat)",
                "Rezistență la spălare 60–90°C",
                "Cantitate minimă mică — de la 100 buc",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
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
          { q: "Ce etichete trebuie să aibă o haină?", a: "Conform legislației UE, orice produs textil trebuie să aibă etichetă de compoziție (procente materiale) și etichetă cu simboluri de îngrijire (spălare, călcare, uscare). Brandurile adaugă și o etichetă cu logo și mărime." },
          { q: "Care este diferența între etichete cusute și termoadezive?", a: "Etichetele cusute se atașează prin coasere și sunt clasice pentru fashion. Etichetele termoadezive se aplică la prese termice (130–160°C) și sunt ideale pentru tricouri, lenjerie și produse fără cusături." },
          { q: "Pot face etichete pentru haine copii cu nume?", a: "Da. Producem etichete textile cu nume pentru hainele copiilor, rezistente la spălare repetată. Comanda minimă este 50 de bucăți cu același nume." },
          { q: "Etichetele cu logo pentru haine rezistă la spălare?", a: "Da. Etichetele țesute pe damasc și cele din satin imprimat rezistă peste 50 de spălări la 60–90°C, fără decolorare." },
          { q: "Cât costă etichetele pentru haine?", a: "De la 0,10 RON/bucată pentru etichete imprimate pe satin. Etichetele țesute pe damasc pornesc de la 0,15 RON/buc la 1000 buc." },
        ]}
      />
    </PageLayout>
  );
}
