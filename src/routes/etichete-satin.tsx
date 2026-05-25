import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-satin")({
  component: EticheteSatin,
  head: () => ({
    meta: [
      { title: "Etichete satin imprimate — finisaj premium | ETICHETT" },
      { name: "description", content: "Etichete satin (satină) imprimate HD pentru haine și branduri de modă. Aspect perlat, moi, rezistente la spălare. Producător Cluj-Napoca." },
      { name: "keywords", content: "etichete satin, etichete satina, etichete satinate, etichete satin imprimate, etichete satin personalizate, etichete satin haine, etichete satin cluj" },
      { property: "og:title", content: "Etichete satin imprimate — finisaj premium | ETICHETT" },
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
  }),
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
            <h2 className="text-2xl font-bold">De ce etichete satin?</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele satin</strong> (numite și <em>etichete satina</em> sau <em>etichete satinate</em>) sunt cele mai folosite etichete textile imprimate. Materialul este moale, lucios, rezistent la spălare 60–90°C și nu zgârie pielea — ideal pentru <em>etichete haine copii</em>, lenjerie, tricouri, hanorace.
            </p>
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
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete satin <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <img src="/images/materials/satin.png" alt="Etichete satin personalizate" className="mx-auto h-72 w-72 object-contain" loading="lazy" />
        </div>
      </section>
    </PageLayout>
  );
}
