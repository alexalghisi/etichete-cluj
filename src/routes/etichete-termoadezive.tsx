import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-termoadezive")({
  component: EticheteTermoadezive,
  head: () => ({
    meta: [
      { title: "Etichete termoadezive pentru haine — fără cusături | ETICHETT" },
      { name: "description", content: "Etichete termoadezive pentru haine, tricouri și lenjerie — se aplică la presă termică, fără cusături. Rezistente la spălare 60°C. Producător Cluj." },
      { name: "keywords", content: "etichete termoadezive, etichete termoadezive haine, etichete termoadezive pentru haine, etichete termocolante, etichete termotransfer, etichete fara cusaturi" },
      { property: "og:title", content: "Etichete termoadezive pentru haine | ETICHETT" },
      { property: "og:description", content: "Etichete termoadezive premium, aplicate la presă termică — fără cusături." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-termoadezive" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-termoadezive" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete termoadezive", item: "https://etichetetextile.ro/etichete-termoadezive" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Etichete termoadezive pentru haine",
          description: "Etichete termoadezive aplicate la presă termică, fără cusături, rezistente la spălare repetată.",
          brand: { "@type": "Brand", name: "Etichett Prod" },
          image: "https://etichetetextile.ro/images/hero-labels.webp",
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "0.12", highPrice: "1.50", offerCount: "8", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
});

function EticheteTermoadezive() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Termoadezive"
        title="Etichete termoadezive pentru haine — fără cusături"
        subtitle="Etichete termoadezive (termocolante) aplicate la presă termică pe tricouri, lenjerie, hanorace, articole sport — fără cusături, cu finisaj curat și soft-touch."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete termoadezive</span>
        </nav>
        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Tehnologie heat-transfer pentru branduri premium</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele termoadezive</strong> sunt soluția modernă pentru branduri care vor un finisaj curat, fără cusături și fără iritații pe piele. Se aplică la prese termice (130–160°C, 10–15 sec) și aderă perfect pe bumbac, poliester și amestecuri.
            </p>
            <h3 className="mt-6 text-lg font-bold">Aplicații tipice</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {[
                "Tricouri & polo — etichetă internă fără cusături",
                "Lenjerie intimă & sport — confort maxim",
                "Hanorace, hoodies, treninguri",
                "Articole copii (fără iritații)",
                "Etichete mărime și logo pe gulerul interior",
                "Compoziție și instrucțiuni de spălare",
              ].map((a) => (
                <li key={a} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {a}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Specificații</h2>
            <dl className="mt-4 grid gap-3 text-sm">
              <div><dt className="font-semibold">Aplicare</dt><dd className="text-muted-foreground">Presă termică 130–160°C, 10–15 secunde</dd></div>
              <div><dt className="font-semibold">Suport textil</dt><dd className="text-muted-foreground">Bumbac, poliester, lycra, amestecuri</dd></div>
              <div><dt className="font-semibold">Rezistență spălare</dt><dd className="text-muted-foreground">60°C, peste 30 de cicluri fără decolorare</dd></div>
              <div><dt className="font-semibold">Imprimare</dt><dd className="text-muted-foreground">CMYK, Pantone, foil, reflectorizant</dd></div>
              <div><dt className="font-semibold">Cantitate minimă</dt><dd className="text-muted-foreground">De la 100 buc</dd></div>
            </dl>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă termoadezive <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-termoadezive"
        items={[
          { q: "Ce sunt etichetele termoadezive?", a: "Etichetele termoadezive (termocolante) sunt etichete cu adeziv activat la căldură, care se aplică pe haine cu presa termică la 130–160°C. Înlocuiesc etichetele cusute și elimină disconfortul." },
          { q: "Cum se aplică etichetele termoadezive?", a: "Cu presă termică la 130–160°C timp de 10–15 secunde, cu presiune medie. Pentru cantități mari recomandăm presă pneumatică pentru consistență." },
          { q: "Rezistă etichetele termoadezive la spălare?", a: "Da. Etichetele noastre termoadezive rezistă la peste 30 de cicluri de spălare la 60°C fără decolorare sau dezlipire." },
          { q: "Pe ce materiale se aplică etichetele termoadezive?", a: "Pe bumbac 100%, poliester, lycra și amestecuri. NU se aplică pe nylon pur, materiale tratate antiapă sau piele." },
          { q: "Care e diferența între termoadezive și termotransfer?", a: "Termotransferul transferă cerneală pe textil (printing). Etichetele termoadezive sunt etichete prefabricate cu adeziv termic — un produs gata de lipit, nu o tehnică de imprimare." },
        ]}
      />
    </PageLayout>
  );
}
