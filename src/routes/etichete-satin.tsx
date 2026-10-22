import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { ProductGuide } from "@/components/ProductGuide";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-satin")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-satin" } }),
  component: EticheteSatin,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete satin imprimate — finisaj premium | Etichett Prod" },
      { name: "description", content: "Etichete satin și saten personalizate, moi și cu aspect perlat, imprimate față-verso pentru haine, lenjerie și compoziție. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete satin, etichete satina, etichete satinate, etichete satin imprimate, etichete satin personalizate, etichete satin haine, etichete satin cluj" },
      { property: "og:title", content: "Etichete satin imprimate — finisaj premium | Etichett Prod" },
      { property: "og:description", content: "Etichete satin moi, cu aspect perlat, rezistente la spălare — ideale pentru branduri de modă." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-satin" },
      { property: "og:image", content: "https://etichetetextile.ro/images/materials/satin.png" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-satin" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete satin", item: "https://etichetetextile.ro/etichete-satin" },
          ],
        }),
      },
    ],
  }, loaderData),
});

function EticheteSatin() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Satin"
        title="Etichete satin (satină) imprimate"
        subtitle="Etichete satin cu aspect perlat premium și textură fină — perfecte pentru îmbrăcăminte de damă, lenjerie, copii și branduri de modă din România."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete satin</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete satin și saten — ce sunt și la ce folosesc</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele satin</strong> (numite și <em>etichete satina</em> sau <em>etichete satinate</em>) sunt cele mai folosite etichete textile imprimate. Materialul este moale, lucios, rezistent la spălare 60–90°C și nu zgârie pielea — ideal pentru <em>etichete haine copii</em>, lenjerie, tricouri, hanorace.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <p className="mt-3 text-muted-foreground">„Saten” este forma folosită frecvent în limba română pentru satin — materialul textil moale, cu luciu perlat, folosit la etichetele premium pentru îmbrăcăminte. Imprimarea față-verso permite compoziția în RO/EN/DE/FR/IT pe aceeași etichetă.</p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Imprimare HD color cu rezoluție mare",
                "Aspect perlat premium",
                "Rezistente la spălare repetată",
                "Moi pe piele — fără mâncărime",
                "Aplicare cusute sau termoadezive",
                "Compoziție multilingvă pe față-verso",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" search={{tip:"satin"}} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete satin <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <img src="/images/materials/satin.png" alt="Etichete satin personalizate" className="mx-auto h-72 w-72 object-contain" loading="lazy" />
        </div>
      </section>
      <ProductGuide slug="satin" />
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-satin"
        items={[
          { q: "Care e diferența între saten și satin?", a: factualFaq('Care e diferența între saten și satin?', 'Saten și satin denumesc același material cu țesătură lucioasă; în catalog folosim ambele forme.', '/etichete-satin') },
          { q: "Ce sunt etichetele satin?", a: factualFaq('Ce sunt etichetele satin?', 'Etichetele satin (sau satina) sunt etichete textile imprimate pe material satin — moi, lucioase, cu aspect perlat premium. Sunt cele mai folosite etichete pentru îmbrăcăminte.', '/etichete-satin') },
          { q: "Etichetele satin se cos sau se aplică termic?", a: factualFaq('Etichetele satin se cos sau se aplică termic?', 'Ambele variante sunt posibile. Etichetele satin clasice se cos pe ceafă sau lateral, iar versiunea termoadezivă se aplică cu presa termică, fără cusături.', '/etichete-satin') },
          { q: "Pe etichetele satin pot pune compoziția în mai multe limbi?", a: factualFaq('Pe etichetele satin pot pune compoziția în mai multe limbi?', 'Da. Imprimăm față-verso, ceea ce permite compoziție multilingvă (RO/EN/DE/FR/IT) și simboluri ISO 3758 pentru spălare.', '/etichete-satin') },
          { q: "Etichetele satin zgârie pielea?", a: factualFaq('Etichetele satin zgârie pielea?', 'Nu. Satinul este un material moale, plăcut pe piele — folosit inclusiv pentru lenjerie, haine de copii și tricouri.', '/etichete-satin') },
          { q: "Cât costă etichetele satin personalizate?", a: factualFaq('Cât costă etichetele satin personalizate?', BUSINESS.price, '/etichete-satin') },
        ]}
      />
    </PageLayout>
  );
}
