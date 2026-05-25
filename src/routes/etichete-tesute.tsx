import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-tesute")({
  component: EticheteTesute,
  head: () => ({
    meta: [
      { title: "Etichete țesute pe damasc & satin — Cluj | ETICHETT" },
      { name: "description", content: "Etichete țesute personalizate pe damasc, satin sau taffeta — în role, tăiate sau pliate. Finisaj premium pentru branduri de haine. Producător Cluj-Napoca." },
      { name: "keywords", content: "etichete tesute, etichete tesute personalizate, etichete tesute haine, etichete tesute damasc, etichete tesute satin, etichete tesute cluj, etichete textile tesute" },
      { property: "og:title", content: "Etichete țesute pe damasc & satin — Cluj | ETICHETT" },
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
          "@type": "Product",
          name: "Etichete țesute personalizate",
          description: "Etichete țesute pe damasc, satin sau taffeta — finisaj premium pentru îmbrăcăminte și accesorii.",
          brand: { "@type": "Brand", name: "ETICHETT PROD" },
          image: "https://etichetetextile.ro/images/products/etichete-tesute.jpg",
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "0.20", availability: "https://schema.org/InStock" },
        }),
      },
    ],
  }),
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
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete țesute <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <img src="/images/products/etichete-tesute.jpg" alt="Etichete țesute personalizate damasc satin" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-tesute"
        items={[
          { q: "Ce sunt etichetele țesute?", a: "Etichetele țesute sunt etichete textile la care logoul și textul sunt țesute direct în material (damasc, satin, taffeta) cu fire colorate — nu imprimate. Rezultă o textură premium și o durabilitate net superioară." },
          { q: "Care e diferența între etichete țesute și etichete imprimate?", a: "Etichetele țesute au designul integrat în material (durabil, premium, cu textură). Etichetele imprimate au designul aplicat la suprafață pe satin/nylon (mai ieftin, ideal pentru text mult și fotografii)." },
          { q: "Câte culori pot avea etichetele țesute?", a: "Standard până la 8 culori de fir per etichetă. Pentru gradient sau imagini fotografice recomandăm etichete imprimate." },
          { q: "Care e cantitatea minimă pentru etichete țesute?", a: "Comanda minimă recomandată este 500 de bucăți, datorită setării războiului de țesut. Sub 500 buc, costul unitar crește semnificativ." },
          { q: "Etichetele țesute rezistă la spălare?", a: "Da. Etichetele țesute pe damasc rezistă la spălare repetată la 90°C, călcare și uscător — fără decolorare." },
        ]}
      />
    </PageLayout>
  );
}
