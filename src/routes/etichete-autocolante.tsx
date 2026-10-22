import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-autocolante")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-autocolante" } }),
  component: EticheteAutocolante,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete autocolante personalizate pe role | Etichett Prod" },
      { name: "description", content: "Etichete autocolante personalizate pe role sau coli, cu imprimare HD pentru produse și ambalaje. Producție locală în. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete autocolante, etichete autocolante personalizate, etichete autocolante pe role, etichete autocolante cluj, etichete autocolante ieftine, etichete autocolante online, etichete autocolante imprimate, imprimanta etichete autocolante" },
      { property: "og:title", content: "Etichete autocolante personalizate | Etichett Prod" },
      { property: "og:description", content: "Etichete autocolante personalizate pe role, imprimate HD — producător Cluj-Napoca." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-autocolante" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-autocolante" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete autocolante", item: "https://etichetetextile.ro/etichete-autocolante" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Etichete autocolante personalizate",
          description: "Etichete autocolante imprimate HD pe role, cu adeziv permanent sau detașabil, decupate la formă.",
          serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image: "https://etichetetextile.ro/images/hero-labels.webp",
        }),
      },
    ],
  }, loaderData),
});

const aplicatii = [
  "Cosmetice, săpunuri, lumânări handmade",
  "Vinuri, băuturi, conserve, borcane",
  "Cutii ambalaje, colete, sigilii",
  "Produse alimentare, catering, brutării",
  "Etichete pentru flacoane farmaceutice",
  "Industrial — coduri de bare, identificare",
];

function EticheteAutocolante() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Autocolante"
        title="Etichete autocolante personalizate pe role"
        subtitle="Etichete autocolante (autoadezive) imprimate HD pe role, în orice formă și dimensiune — alternativă profesională la imprimanta de etichete autocolante de birou."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete autocolante</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete autocolante imprimate HD</h2>
            <p className="mt-3 text-muted-foreground">
              Producem <strong>etichete autocolante personalizate</strong> pe role, pe hârtie albă, transparentă, metalizată sau kraft, cu finisaje mat, lucios sau lac selectiv. Calitate de tipografie, în serie — fără limitele unei <em>imprimante de etichete autocolante</em> de birou.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <h3 className="mt-6 text-lg font-bold">Aplicații frecvente</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {aplicatii.map((a) => (
                <li key={a} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {a}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Vezi și varianta cu accent pe adeziv: <Link to="/etichete-autoadezive" className="text-primary underline">etichete autoadezive</Link>.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Caracteristici tehnice</h2>
            <dl className="mt-4 grid gap-3 text-sm">
              <div><dt className="font-semibold">Suport</dt><dd className="text-muted-foreground">Hârtie albă, transparentă, metalizată aur/argint, kraft, sintetic PP/PE</dd></div>
              <div><dt className="font-semibold">Adeziv</dt><dd className="text-muted-foreground">Permanent, detașabil (removable), congelare, anvelope</dd></div>
              <div><dt className="font-semibold">Imprimare</dt><dd className="text-muted-foreground">CMYK + Pantone, calitate HD foto, până la 6 culori</dd></div>
              <div><dt className="font-semibold">Finisaj</dt><dd className="text-muted-foreground">Mat, lucios, lac selectiv, folio aur/argint, relief</dd></div>
              <div><dt className="font-semibold">Format</dt><dd className="text-muted-foreground">Role sau coli, formă rotundă/pătrată/decupată la cerere</dd></div>
              <div><dt className="font-semibold">Cantitate minimă</dt><dd className="text-muted-foreground">{BUSINESS.minimum.stickers} buc</dd></div>
            </dl>
            <Link to="/cere-oferta" search={{tip:"autocolante"}} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă autocolante <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-autocolante"
        items={[
          { q: "Care este diferența între etichete autocolante și autoadezive?", a: factualFaq('Care este diferența între etichete autocolante și autoadezive?', 'Sunt același produs — „autocolant” și „autoadeziv” se folosesc interschimbabil. Ambele se referă la etichete imprimate cu adeziv pe spate, livrate pe role sau coli.', '/etichete-autocolante') },
          { q: "Care e cantitatea minimă pentru etichete autocolante personalizate?", a: factualFaq('Care e cantitatea minimă pentru etichete autocolante personalizate?', 'Producem etichete autocolante de la 500 de bucăți. Pentru cantități mari (peste 10.000) prețul scade semnificativ.', '/etichete-autocolante') },
          { q: "Pe ce suprafețe se aplică etichetele autocolante?", a: factualFaq('Pe ce suprafețe se aplică etichetele autocolante?', 'Pe sticlă, plastic, carton, metal, hârtie. Avem adezivi specializați pentru congelare, suprafețe umede sau anvelope.', '/etichete-autocolante') },
          { q: "Pot avea etichete autocolante transparente?", a: factualFaq('Pot avea etichete autocolante transparente?', 'Da. Producem etichete autocolante pe folie transparentă (efect „no-label look”), folie albă, metalizată aur/argint sau hârtie kraft naturală.', '/etichete-autocolante') },
          { q: "Cât costă etichetele autocolante personalizate?", a: factualFaq('Cât costă etichetele autocolante personalizate?', 'Prețul pleacă de la 0,05 RON/bucată și depinde de cantitate, dimensiune, material și finisaj. Trimite specificațiile pe contact și primești ofertă în 24h.', '/etichete-autocolante') },
          { q: "Faceți etichete autocolante în Cluj?", a: factualFaq('Faceți etichete autocolante în Cluj?', 'Da. Suntem producător de etichete autocolante în Cluj-Napoca cu peste 30 de ani experiență. Livrăm în toată România.', '/etichete-autocolante') },
        ]}
      />
    </PageLayout>
  );
}
