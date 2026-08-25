import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ProductGallery } from "@/components/ProductGallery";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-haine-copii")({
  component: EticheteHaineCopii,
  head: () => ({
    meta: [
      { title: "Etichete pentru haine copii cu nume — grădiniță, școală | ETICHETT" },
      { name: "description", content: "Etichete pentru haine copii cu nume — pentru grădiniță, școală, tabere. Termoadezive sau cusute, rezistente la spălare. Producător Cluj-Napoca." },
      { name: "keywords", content: "etichete haine copii, etichete cu nume copii, etichete gradinita, etichete scoala, etichete haine copii personalizate, etichete textile copii" },
      { property: "og:title", content: "Etichete haine copii cu nume | ETICHETT" },
      { property: "og:description", content: "Etichete personalizate cu numele copilului — pentru grădiniță, școală, tabere." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-haine-copii" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-haine-copii" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete haine copii", item: "https://etichetetextile.ro/etichete-haine-copii" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Etichete pentru haine copii cu nume",
          description: "Etichete textile cu numele copilului — termoadezive sau cusute, rezistente la spălare.",
          brand: { "@type": "Brand", name: "ETICHETT PROD" },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "0.40", highPrice: "1.50", offerCount: "5", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
});

function EticheteHaineCopii() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Copii"
        title="Etichete pentru haine copii cu nume"
        subtitle="Nu mai pierdeți hainele la grădiniță sau școală — etichete textile personalizate cu numele copilului, rezistente la spălare repetată."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete haine copii</span>
        </nav>
        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Hainele copilului tău, mereu acasă</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele pentru hainele copiilor</strong> sunt salvarea părinților cu copii la creșă, grădiniță, școală sau tabere. Producem etichete textile cu numele copilului — termoadezive (fără cusături, fără iritații) sau cusute clasic.
            </p>
            <h3 className="mt-6 text-lg font-bold">Ideal pentru</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {[
                "Haine creșă, grădiniță, școală",
                "Pijamale, tricouri, hanorace",
                "Prosoape, papuci, șepci",
                "Echipament sportiv & after school",
                "Bagaje și ghiozdane pentru tabere",
                "Articole de uniformă",
              ].map((a) => (
                <li key={a} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {a}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Comandă etichete cu nume <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Opțiuni disponibile</h2>
            <dl className="mt-4 grid gap-3 text-sm">
              <div><dt className="font-semibold">Termoadezive</dt><dd className="text-muted-foreground">Fără cusături, fără iritații — se aplică la fierul de călcat sau presă</dd></div>
              <div><dt className="font-semibold">Cusute</dt><dd className="text-muted-foreground">Etichete textile clasice, cusute pe gulerul interior</dd></div>
              <div><dt className="font-semibold">Personalizare</dt><dd className="text-muted-foreground">Nume, prenume, telefon de urgență, simboluri/iconițe</dd></div>
              <div><dt className="font-semibold">Cantitate minimă</dt><dd className="text-muted-foreground">De la 50 buc cu același nume</dd></div>
              <div><dt className="font-semibold">Rezistență</dt><dd className="text-muted-foreground">Spălare 60°C, peste 50 de cicluri</dd></div>
            </dl>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-haine-copii"
        items={[
          { q: "Cum aplic etichetele termoadezive pe hainele copilului?", a: "Cu fierul de călcat la temperatură medie-mare (cotton, fără abur), prin apăsare fermă 15–20 de secunde printr-o pânză subțire. Verifică instrucțiunile incluse." },
          { q: "Etichetele cu nume rezistă la spălare?", a: "Da, etichetele noastre rezistă la peste 50 de cicluri de spălare la 60°C, inclusiv în mașina de spălat și uscător." },
          { q: "Care este cantitatea minimă?", a: "50 de bucăți cu același nume. Pentru frați putem combina două sau trei nume în aceeași comandă." },
          { q: "Cât durează livrarea etichetelor pentru copii?", a: "5–7 zile lucrătoare de la confirmarea designului. Pentru începutul anului școlar recomandăm comanda în august." },
          { q: "Pot pune și numărul de telefon pe etichetă?", a: "Da. Multe părinți aleg să includă numele copilului + un număr de telefon de urgență, util mai ales pentru tabere." },
        ]}
      />
    </PageLayout>
  );
}
