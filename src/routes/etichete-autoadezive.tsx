import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-autoadezive")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-autoadezive" } }),
  component: EticheteAutoadezive,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete adezive și autoadezive personalizate pe role | Etichett Prod" },
      { name: "description", content: "Etichete adezive și autoadezive personalizate pe role, pentru ambalaje, cosmetice și produse. Forme și finisaje adaptate. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete adezive, etichete adezive personalizate, etichete adezive pe role, etichete adezive cluj, etichete autoadezive, etichete autoadezive personalizate, etichete autocolante, etichete autocolante personalizate, etichete pe role, imprimanta etichete autoadezive, etichete sticker" },
      { property: "og:title", content: "Etichete adezive și autoadezive personalizate pe role" },
      { property: "og:description", content: "Etichete adezive imprimate HD pentru produsele tale — pe role, decupate la formă. Producător Cluj-Napoca." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-autoadezive" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-autoadezive" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete autoadezive", item: "https://etichetetextile.ro/etichete-autoadezive" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Etichete adezive (autoadezive) personalizate",
          description: "Etichete adezive imprimate HD pe role, cu adeziv puternic sau detașabil, decupate la formă.",
          serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image: "https://etichetetextile.ro/images/hero-labels.webp",
        }),
      },
    ],
  }, loaderData),
});

const aplicatii = [
  "Cosmetice & săpunuri handmade",
  "Vinuri, băuturi, conserve, borcane",
  "Cutii ambalaje și colete",
  "Produse alimentare & catering",
  "Textile, ambalaje haine",
  "Industrial — coduri de bare, identificare",
];

function EticheteAutoadezive() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Categorie · Etichete adezive"
        title="Etichete adezive personalizate pe role"
        subtitle="Etichete adezive (autoadezive / autocolante) imprimate HD pe role — pentru cosmetice, vinuri, borcane, ambalaje și produse handmade. Adeziv puternic sau detașabil, forme decupate."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete adezive</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete adezive imprimate HD</h2>
            <p className="mt-3 text-muted-foreground">
              Realizăm <strong>etichete adezive personalizate</strong> (numite și <strong>etichete autoadezive</strong> sau autocolante) pe role, în orice formă și dimensiune. Folosim hârtie albă, transparentă, metalizată sau cu textură, cu finisaje mate, lucioase sau cu lac selectiv. Alternativă profesională la <em>imprimanta de etichete autoadezive</em> de birou — calitate de tipografie, în serie.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <h3 className="mt-6 text-lg font-bold">Aplicații frecvente</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {aplicatii.map((a) => (
                <li key={a} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {a}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Caracteristici tehnice</h2>
            <dl className="mt-4 grid gap-3 text-sm">
              <div><dt className="font-semibold">Suport</dt><dd className="text-muted-foreground">Hârtie albă, transparentă, metalizată, kraft, sintetic</dd></div>
              <div><dt className="font-semibold">Adeziv</dt><dd className="text-muted-foreground">Permanent, detașabil, congelare, anvelope</dd></div>
              <div><dt className="font-semibold">Imprimare</dt><dd className="text-muted-foreground">CMYK + culori Pantone, până la HD foto</dd></div>
              <div><dt className="font-semibold">Finisaj</dt><dd className="text-muted-foreground">Mat, lucios, lac selectiv, folio aur/argint</dd></div>
              <div><dt className="font-semibold">Format</dt><dd className="text-muted-foreground">Role sau coli, formă rotundă/pătrată/decupată</dd></div>
            </dl>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă autoadezive <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-autoadezive"
        items={[
          { q: "Ce sunt etichetele adezive?", a: "Etichetele adezive (autoadezive sau autocolante) sunt etichete imprimate pe hârtie sau folie cu adeziv pe spate, livrate pe role sau coli. Folosite pentru produse, ambalaje, cosmetice, vinuri, borcane." },
          { q: "Pe ce materiale se aplică etichetele autoadezive?", a: "Pe sticlă, plastic, carton, metal, hârtie și majoritatea suprafețelor curate. Oferim adezivi specializați pentru congelare, anvelope sau aplicații umede." },
          { q: "Pot avea etichete autoadezive transparente?", a: "Da. Producem etichete autoadezive pe folie transparentă (efect „no-label look”), folie albă, metalizată aur/argint sau hârtie kraft." },
          { q: "Care e diferența între etichete adezive și etichete textile?", a: "Etichetele autoadezive se lipesc pe ambalaje și produse, fiind imprimate pe hârtie/folie. Etichetele textile se cos sau se aplică termic pe haine, fiind realizate din material textil." },
          { q: "Faceți etichete adezive în Cluj?", a: "Da. Suntem producător de etichete adezive și autoadezive în Cluj-Napoca cu peste 30 de ani experiență — livrăm în toată România." },
        ]}
      />
    </PageLayout>
  );
}
