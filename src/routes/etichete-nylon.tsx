import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-nylon")({
  loader: () => getSeoOverride({ data: { path: "/etichete-nylon" } }),
  component: EticheteNylon,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete nylon — subțiri, rezistente pentru haine sport | ETICHETT" },
      { name: "description", content: "Etichete nylon (taffeta) — subțiri, ușoare și rezistente. Perfecte pentru îmbrăcăminte sport, tehnică, outdoor și lenjerie. Producător Cluj-Napoca." },
      { name: "keywords", content: "etichete nylon, etichete nylon haine, etichete taffeta, etichete nylon sport, etichete nylon personalizate, etichete nylon cluj, etichete tehnice" },
      { property: "og:title", content: "Etichete nylon — subțiri, rezistente pentru haine sport | ETICHETT" },
      { property: "og:description", content: "Etichete din nylon (taffeta) — subțiri, rezistente la spălare intensivă și transpirație. Ideale pentru sport și outdoor." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-nylon" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-nylon" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete nylon", item: "https://etichetetextile.ro/etichete-nylon" },
          ],
        }),
      },
    ],
  }, loaderData),
});

function EticheteNylon() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Nylon / Taffeta"
        title="Etichete nylon (taffeta) personalizate"
        subtitle="Etichete din nylon — foarte subțiri, ușoare, rezistente la spălare intensivă și la transpirație. Prima alegere pentru îmbrăcăminte sport, outdoor, tehnică și lenjerie."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete nylon</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">De ce etichete nylon?</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele nylon</strong> (cunoscute și ca <em>taffeta</em>) sunt cele mai subțiri etichete textile imprimate. Nu adaugă volum, nu se șifonează și rezistă la spălări la 90°C, la clor moderat și la frecare — de aceea sunt preferate pentru <em>tricouri sport, echipamente de fitness, jachete outdoor, costume tehnice</em> și lenjerie.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Foarte subțiri — invizibile prin materiale fine",
                "Rezistente la spălare 90°C și transpirație",
                "Imprimare full-color față-verso",
                "Cost redus vs. satin — ideal pentru serii mari",
                "Aplicare cusute sau termoadezive",
                "Compoziție multilingvă pe același rând",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete nylon <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="space-y-4">
            <h3 className="text-xl font-bold">Nylon vs. satin — ce alegi?</h3>
            <p className="text-muted-foreground">
              <strong>Satinul</strong> are aspect perlat premium, e mai moale la atingere și e prima alegere pentru fashion. <strong>Nylonul</strong> e mai subțire, mai rezistent și mai economic — ideal pentru volume mari și pentru sportswear.
            </p>
            <p className="text-muted-foreground">
              Vezi și <Link to="/etichete-satin" className="font-semibold text-primary hover:underline">etichete satin</Link>, <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link> sau <Link to="/etichete-compozitie" className="font-semibold text-primary hover:underline">etichete de compoziție</Link>.
            </p>
          </article>
        </div>
      </section>

      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-nylon"
        items={[
          { q: "Ce sunt etichetele nylon?", a: "Etichetele nylon (taffeta) sunt etichete imprimate pe material poliamidic subțire, foarte rezistent la spălare, transpirație și frecare — folosite mai ales pentru haine sport." },
          { q: "Rezistă la spălare la 90°C?", a: "Da. Etichetele nylon rezistă la spălări repetate la 60–90°C fără decolorare, atâta vreme cât cernelurile sunt cele indicate pentru textile." },
          { q: "Nylon sau satin pentru compoziție?", a: "Ambele sunt bune. Nylon = mai economic și mai subțire; satin = mai premium și mai plăcut pe piele. Pentru fashion recomandăm satin, pentru sport nylon." },
          { q: "Etichetele nylon pot fi termoadezive?", a: "Da. Aplicăm nylonul cu adeziv pe spate, care se activează cu presa termică — util la echipamentele fără cusături." },
          { q: "Care este cantitatea minimă?", a: "Pornim de la 200 buc. pentru etichete nylon imprimate. Sub această cantitate recomandăm satinul." },
        ]}
      />
    </PageLayout>
  );
}
