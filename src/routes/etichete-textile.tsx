import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-textile")({
  component: EticheteTextile,
  head: () => ({
    meta: [
      { title: "Etichete textile — țesute & imprimate Cluj | ETICHETT" },
      { name: "description", content: "Etichete textile pentru haine și branduri: țesute, imprimate, satin, nylon, carton, termoadezive, de compoziție. Producător Cluj-Napoca." },
      { name: "keywords", content: "etichete textile, etichete textile haine, etichete textile personalizate, etichete textile cluj, etichete textile tesute, etichete textile imprimate, etichete textile satin, etichete textile nylon" },
      { property: "og:title", content: "Etichete textile — țesute & imprimate Cluj | ETICHETT" },
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
  }),
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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Ce înseamnă „etichete textile”?</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele textile</strong> sunt etichete realizate din material textil (țesut sau imprimat) aplicate pe haine, încălțăminte, marochinărie, mobilier sau articole tehnice. Conțin <em>brandul, mărimea, compoziția, simbolurile de spălare și țara de origine</em> — informații cerute legal pentru îmbrăcăminte.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Cum alegi tipul potrivit</h2>
            <p className="mt-3 text-muted-foreground">
              Pentru logo cu finisaj premium → <strong>etichete țesute pe damasc/satin</strong>. Pentru compoziție multilingvă → <strong>etichete imprimate pe satin sau nylon</strong>. Pentru haine fără cusături sau colecții capsule → <strong>etichete termoadezive</strong>. Pentru hangtag-uri și prețuri → <strong>etichete carton</strong>.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Cere ofertă pentru etichete textile <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-textile"
        items={[
          { q: "Ce sunt etichetele textile?", a: "Etichetele textile sunt etichete realizate din material textil (țesut sau imprimat) aplicate pe haine, încălțăminte sau marochinărie. Conțin brandul, mărimea, compoziția, simbolurile de spălare și țara de origine." },
          { q: "Ce tipuri de etichete textile produceți?", a: "Țesute pe damasc/satin/taffeta, imprimate pe satin/nylon/bumbac, etichete de compoziție multilingve, termoadezive, autoadezive și hangtag-uri din carton." },
          { q: "Sunt obligatorii etichetele textile pe haine?", a: "Da. Legislația UE impune ca orice articol de îmbrăcăminte să aibă etichetă cu compoziția fibrelor (Reg. 1007/2011) și simbolurile de îngrijire ISO 3758." },
          { q: "Care e cantitatea minimă pentru etichete textile?", a: "Pornim de la 100 buc pentru imprimate și 500 buc pentru țesute. Pentru cantități mici recomandăm etichetele imprimate pe satin." },
          { q: "Livrați etichete textile în toată România?", a: "Da. Suntem producător în Cluj-Napoca și livrăm prin curier în toată țara, în 24–48h de la finalizarea producției." },
        ]}
      />
    </PageLayout>
  );
}
