import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { ProductGuide } from "@/components/ProductGuide";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-tesute")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-tesute" } }),
  component: EticheteTesute,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete țesute pe damasc & satin — Cluj | Etichett Prod" },
      { name: "description", content: "Etichete țesute personalizate pe damasc, satin și taffeta, în role, tăiate sau pliate. Logo și culori pentru brandurile de. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete tesute, etichete tesute personalizate, etichete tesute haine, etichete tesute damasc, etichete tesute satin, etichete tesute cluj, etichete textile tesute" },
      { property: "og:title", content: "Etichete țesute pe damasc & satin — Cluj | Etichett Prod" },
      { property: "og:description", content: "Etichete țesute premium pentru îmbrăcăminte — damasc, satin, taffeta, în multiple culori." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-tesute" },
      { property: "og:image", content: "https://etichetetextile.ro/images/products/etichete-tesute.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-tesute" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete țesute", item: "https://etichetetextile.ro/etichete-tesute" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Etichete țesute personalizate",
          description: "Etichete țesute pe damasc, satin sau taffeta — finisaj premium pentru îmbrăcăminte și accesorii.",
          serviceType: "Producție etichete personalizate", provider: { "@id": "https://etichetetextile.ro/#business" }, areaServed: [{ "@type": "Country", name: "România" }, { "@type": "City", name: "Cluj-Napoca" }],
          image: "https://etichetetextile.ro/images/products/etichete-tesute.jpg",
        }),
      },
    ],
  }, loaderData),
});

function EticheteTesute() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Tehnică · Țesute"
        title="Etichete țesute pe damasc, satin, taffeta"
        subtitle="Etichete țesute personalizate pentru branduri care vor un finisaj impecabil — în role, tăiate, pliate sau autoadezive, în multiple culori."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete țesute</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete țesute — finisaj de brand</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele țesute</strong> sunt cele mai apreciate etichete textile pentru branduri premium. Logoul este țesut direct în material, nu imprimat — rezultă o textură și o durabilitate net superioare. Producem <em>etichete țesute personalizate</em> pe damasc (cel mai folosit), satin (lucios) sau taffeta (subțire).
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege etichete țesute; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <h3 className="mt-6 text-lg font-bold">Variante de livrare</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {[
                "În rolă (pentru aplicare automată)",
                "Tăiate la dimensiune",
                "Pliate (centru, capăt, manhattan, mitre)",
                "Cu sigiliu termic pe margini",
                "Autoadezive pe spate",
                "Până la 8 culori de fir",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {x}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" search={{tip:"tesute"}} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete țesute <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <img src="/images/products/etichete-tesute.webp" alt="Etichete țesute personalizate damasc satin" width="800" height="800" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" decoding="async" />
        </div>
      </section>
      <ProductGuide slug="tesute" />
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-tesute"
        items={[
          { q: "Ce sunt etichetele țesute?", a: factualFaq('Ce sunt etichetele țesute?', 'Etichetele țesute sunt etichete textile la care logoul și textul sunt țesute direct în material (damasc, satin, taffeta) cu fire colorate — nu imprimate. Rezultă o textură premium și o durabilitate net superioară.', '/etichete-tesute') },
          { q: "Care e diferența între etichete țesute și etichete imprimate?", a: factualFaq('Care e diferența între etichete țesute și etichete imprimate?', 'Etichetele țesute au designul integrat în material (durabil, premium, cu textură). Etichetele imprimate au designul aplicat la suprafață pe satin/nylon (mai ieftin, ideal pentru text mult și fotografii).', '/etichete-tesute') },
          { q: "Câte culori pot avea etichetele țesute?", a: factualFaq('Câte culori pot avea etichetele țesute?', 'Standard până la 8 culori de fir per etichetă. Pentru gradient sau imagini fotografice recomandăm etichete imprimate.', '/etichete-tesute') },
          { q: "Care e cantitatea minimă pentru etichete țesute?", a: factualFaq('Care e cantitatea minimă pentru etichete țesute?', 'Comanda minimă recomandată este 500 de bucăți, datorită setării războiului de țesut. Sub 500 buc, costul unitar crește semnificativ.', '/etichete-tesute') },
          { q: "Etichetele țesute rezistă la spălare?", a: factualFaq('Etichetele țesute rezistă la spălare?', 'Da. Etichetele țesute pe damasc rezistă la spălare repetată la 90°C, călcare și uscător — fără decolorare.', '/etichete-tesute') },
        ]}
      />
    </PageLayout>
  );
}
