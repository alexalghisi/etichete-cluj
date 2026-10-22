import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-carton")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-carton" } }),
  component: EticheteCarton,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete carton — hangtag personalizat haine | Etichett Prod" },
      { name: "description", content: "Etichete carton personalizate și hangtag-uri pentru haine, cu logo, cod de bare și finisaje variate. Producător în. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete carton, etichete carton personalizate, hangtag, hangtag personalizat, etichete carton haine, etichete carton cluj, etichete hartie carton" },
      { property: "og:title", content: "Etichete carton — hangtag personalizat haine | Etichett Prod" },
      { property: "og:description", content: "Hangtag-uri din carton premium pentru brandul tău — diverse forme, finisaje și grosimi." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-carton" },
      { property: "og:image", content: "https://etichetetextile.ro/images/materials/carton.png" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-carton" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete carton", item: "https://etichetetextile.ro/etichete-carton" },
          ],
        }),
      },
    ],
  }, loaderData),
});

function EticheteCarton() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Carton"
        title="Etichete carton & hangtag-uri personalizate"
        subtitle="Etichete carton premium (hangtag) pentru îmbrăcăminte și produse de brand — cu logo, preț, cod de bare și țara de origine."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete carton</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <img src="/images/materials/carton.png" alt="Etichete carton hangtag personalizat" className="mx-auto h-72 w-72 object-contain" loading="lazy" />
          <article>
            <h2 className="text-2xl font-bold">Hangtag din carton — finisaj de brand</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele carton</strong> (sau <em>hangtag-urile</em>) sunt indispensabile brandurilor de îmbrăcăminte. Le folosești pentru a comunica <em>marca, prețul, codul de bare, mărimea, țara de origine</em> și storytelling-ul produsului tău. Tipărim pe carton de 250–400 g/mp în diverse forme și finisaje.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <h3 className="mt-6 text-lg font-bold">Opțiuni disponibile</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {[
                "Carton mat, lucios, kraft, reciclat",
                "Folio aur/argint, lac selectiv, relief",
                "Decupare formă specială",
                "Perforare pentru șnur sau cleme",
                "Tipărire față-verso, până la 6 culori",
                "Cod de bare / QR inclus",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {x}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" search={{tip:"carton"}} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete carton <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-carton"
        items={[
          { q: "Ce sunt etichetele din carton?", a: factualFaq('Ce sunt etichetele din carton?', 'Etichetele din carton (hangtag-uri) sunt etichete rigide din carton 250–400 g/mp, atașate cu șnur sau cleme pe haine și produse. Comunică brandul, prețul, codul de bare și mărimea.', '/etichete-carton') },
          { q: "Ce grosime de carton recomandați pentru hangtag?", a: factualFaq('Ce grosime de carton recomandați pentru hangtag?', 'Pentru haine recomandăm 300–350 g/mp — suficient de rigid și cu aspect premium. Pentru produse de lux folosim carton 400 g/mp cu finisaje speciale (folio, relief).', '/etichete-carton') },
          { q: "Pot avea cod de bare pe eticheta de carton?", a: factualFaq('Pot avea cod de bare pe eticheta de carton?', 'Da. Generăm și tipărim coduri EAN-13, EAN-8 sau QR direct pe eticheta de carton, în serii unice sau identice.', '/etichete-carton') },
          { q: "Etichetele carton pot fi reciclate?", a: factualFaq('Etichetele carton pot fi reciclate?', 'Da. Oferim variante de carton reciclat 100% și kraft natural, pentru branduri eco-friendly.', '/etichete-carton') },
          { q: "Care este diferența între etichetă carton și hangtag?", a: factualFaq('Care este diferența între etichetă carton și hangtag?', 'Sunt același lucru — „hangtag” este termenul englezesc folosit în industria fashion pentru eticheta de carton atașată cu șnur.', '/etichete-carton') },
        ]}
      />
    </PageLayout>
  );
}
