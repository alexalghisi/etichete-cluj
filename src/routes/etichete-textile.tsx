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

export const Route = createFileRoute("/etichete-textile")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-textile" } }),
  component: EticheteTextile,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete textile — țesute & imprimate Cluj | Etichett Prod" },
      { name: "description", content: "Etichete textile țesute și imprimate pentru haine și branduri, din satin, nylon sau bumbac. Producător din Cluj-Napoca din. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete textile, etichete textile haine, etichete textile personalizate, etichete textile cluj, etichete textile tesute, etichete textile imprimate, etichete textile satin, etichete textile nylon" },
      { property: "og:title", content: "Etichete textile — țesute & imprimate Cluj | Etichett Prod" },
      { property: "og:description", content: "Gamă completă de etichete textile pentru branduri, ateliere și producători de îmbrăcăminte din Cluj-Napoca și România." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-textile" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-textile" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete textile", item: "https://etichetetextile.ro/etichete-textile" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Etichete textile",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Etichete țesute" },
            { "@type": "ListItem", position: 2, name: "Etichete imprimate" },
            { "@type": "ListItem", position: 3, name: "Etichete satin" },
            { "@type": "ListItem", position: 4, name: "Etichete nylon" },
            { "@type": "ListItem", position: 5, name: "Etichete carton (hangtag)" },
            { "@type": "ListItem", position: 6, name: "Etichete termoadezive" },
            { "@type": "ListItem", position: 7, name: "Etichete autoadezive" },
            { "@type": "ListItem", position: 8, name: "Etichete de compoziție" },
          ],
        }),
      },
    ],
  }, loaderData),
});

const tipuri: { t: string; d: string; href?: string }[] = [
  { t: "Etichete țesute", d: "Pe damasc, satin sau taffeta, în mai multe culori, în role sau tăiate, pliate, pot fi autoadezive.", href: "/etichete-tesute" },
  { t: "Etichete imprimate", d: "Pe bumbac, poliester, poliamidă, satin — cu siglă sau compoziție, față-verso, multiple culori." },
  { t: "Etichete satin", d: "Aspect perlat premium, rezistente la spălare, ideale pentru branduri de modă.", href: "/etichete-satin" },
  { t: "Etichete nylon", d: "Subțiri, foarte rezistente — folosite pentru îmbrăcăminte sport, outdoor și tehnică.", href: "/etichete-nylon" },
  { t: "Etichete carton (hangtag)", d: "Carton premium pentru hangtag-uri cu brand, preț, cod de bare, țară de origine.", href: "/etichete-carton" },
  { t: "Etichete termoadezive", d: "Aplicabile cu presa termică pe haine — fără cusături, finisaj plat.", href: "/etichete-termoadezive" },
  { t: "Etichete autoadezive", d: "Pe role, pentru ambalaje, produse, cosmetice, textile — adeziv puternic sau detașabil.", href: "/etichete-autoadezive" },
  { t: "Etichete de compoziție", d: "În RO/EN/DE/FR/IT, cu simboluri ISO 3758 și procentele exacte ale fibrelor.", href: "/etichete-compozitie" },
];

function EticheteTextile() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Etichete textile"
        title="Etichete textile pentru haine, încălțăminte & branduri"
        subtitle="Toată gama de etichete textile produsă la Etichett Prod — țesute, imprimate, satin, nylon, carton, termoadezive, autoadezive și de compoziție."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete textile</span>
        </nav>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tipuri.map((x) => (
            <article key={x.t} className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-lg font-bold">{x.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            
              {x.href && (
                <Link to={x.href} className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline">
                  Detalii {x.t.toLowerCase()} →
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold">Categorii înrudite</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Caută <Link to="/etichete-personalizate" className="font-semibold text-primary hover:underline">etichete personalizate</Link> cu logo,{" "}
            <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link> pe damasc,{" "}
            <Link to="/etichete-satin" className="font-semibold text-primary hover:underline">etichete satin</Link> imprimate,{" "}
            <Link to="/etichete-carton" className="font-semibold text-primary hover:underline">etichete carton (hangtag)</Link> sau{" "}
            <Link to="/etichete-autoadezive" className="font-semibold text-primary hover:underline">etichete autoadezive</Link> pe role? Avem secțiuni dedicate pentru fiecare.
          </p>
        </div>

        <div className="mt-10">
          <Link to="/cere-oferta" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Cere ofertă pentru etichete textile <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-textile"
        items={[
          { q: "Ce sunt etichetele textile?", a: factualFaq('Ce sunt etichetele textile?', 'Etichetele textile sunt etichete realizate din material textil (țesut sau imprimat) aplicate pe haine, încălțăminte sau marochinărie. Conțin brandul, mărimea, compoziția, simbolurile de spălare și țara de origine.', '/etichete-textile') },
          { q: "Ce tipuri de etichete textile produceți?", a: factualFaq('Ce tipuri de etichete textile produceți?', 'Țesute pe damasc/satin/taffeta, imprimate pe satin/nylon/bumbac, etichete de compoziție multilingve, termoadezive, autoadezive și hangtag-uri din carton.', '/etichete-textile') },
          { q: "Sunt obligatorii etichetele textile pe haine?", a: factualFaq('Sunt obligatorii etichetele textile pe haine?', 'Regulamentul UE 1007/2011 reglementează compoziția fibrelor, cu excepțiile prevăzute de regulament. Simbolurile ISO 3758 privesc întreținerea, nu aceeași obligație legală.', '/etichete-textile') },
          { q: "Care e cantitatea minimă pentru etichete textile?", a: factualFaq('Care e cantitatea minimă pentru etichete textile?', 'Pornim de la 100 buc pentru imprimate și 500 buc pentru țesute. Pentru cantități mici recomandăm etichetele imprimate pe satin.', '/etichete-textile') },
          { q: "Livrați etichete textile în toată România?", a: factualFaq('Livrați etichete textile în toată România?', 'Da. Suntem producător în Cluj-Napoca și livrăm prin curier în toată țara, în 24–48h de la finalizarea producției.', '/etichete-textile') },
        ]}
      />
      <LocalBusinessBlock keyword="Etichete textile Cluj-Napoca" />
      <LabelGuide topic="haine și textile" compact/>
    </PageLayout>
  );
}
