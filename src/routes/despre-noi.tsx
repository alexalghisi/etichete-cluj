import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/despre-noi")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/despre-noi" } }),
  component: DespreNoi,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Despre noi — Etichete textile Cluj din 1993 | Etichett Prod" },
      { name: "description", content: "Etichett Prod — producător de etichete textile în Cluj-Napoca din 1993. Etichete țesute, imprimate, de compoziție pentru haine și branduri." },
      { property: "og:title", content: "Despre noi — Etichete textile Cluj din 1993 | Etichett Prod" },
      { property: "og:description", content: "Producător de etichete textile în Cluj-Napoca din 1993. Etichete imprimate, țesute, de compoziție rezistente la spălare." },
      { property: "og:url", content: "https://etichetetextile.ro/despre-noi" },
      { property: "og:image", content: "https://etichetetextile.ro/images/products/etichete-personalizate.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/despre-noi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Despre Etichett Prod",
          url: "https://etichetetextile.ro/despre-noi",
          description: "Producător de etichete textile din 1993, cu atelier în Cluj-Napoca.",
          mainEntity: {
            "@type": "Organization",
            name: "Etichett Prod",
            foundingDate: "1993",
            url: "https://etichetetextile.ro/",
            address: { "@type": "PostalAddress", streetAddress: "Str. Uzinei Electrice Nr. 9", addressLocality: "Cluj-Napoca", addressCountry: "RO" },
          },
        }),
      },
    ],
  }, loaderData),
});

function DespreNoi() {
  return (
    <PageLayout>
      <PageHero eyebrow="Despre noi" title="Etichete textile cu peste 30 de ani de experiență" subtitle="Înființată în 1993, Etichett Prod este unul dintre producătorii de etichete textile cu cea mai lungă tradiție din Cluj-Napoca." />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-muted-foreground"><strong className="text-foreground">Etichett Prod</strong> a fost înființată în anul 1993, având ca obiect principal de activitate producția de etichete textile pentru îmbrăcăminte, încălțăminte, marochinărie, mobilier, articole tehnice și nu numai.</p>
          <p className="mt-5 text-muted-foreground">Cu o experiență de peste 30 ani în domeniu, vă putem oferi tot sprijinul de care aveți nevoie pentru toată gama de etichete. Folosim mai multe tipuri de imprimare și materiale de cea mai bună calitate. Producția etichetelor textile necesită condiții speciale — țesătura, suportul textil și imprimarea trebuie să fie rezistente, pentru a fi spălate și călcate împreună cu hainele pe care sunt aplicate.</p>
          <p className="mt-5 text-muted-foreground">Astfel, imprimarea pe suport textil se face cu coloranți speciali, la temperaturi înalte, pentru ca etichetele să fie <strong>rezistente la spălare, frecare și temperaturi ridicate</strong>.</p>
          <p className="mt-5 text-muted-foreground">Etichetele sunt elemente indispensabile pentru orice produs. Scopul principal este de a furniza informații exacte despre produs sau despre producător.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Producție din 1993", d: "Peste trei decenii dedicate exclusiv etichetelor textile." },
            { t: "Atelier în Cluj-Napoca", d: "Producție internă, control de calitate la fiecare etapă." },
            { t: "Materiale premium", d: "Bumbac, satin, nylon, carton — alese pentru fiecare aplicație." },
            { t: "Personalizare completă", d: "De la design și simulare grafică, până la produsul final." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-bold">{x.t}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/produse" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Vezi produsele <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted">Contactează-ne</Link>
        </div>
      </section>
    </PageLayout>
  );
}
