import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-carton")({
  component: EticheteCarton,
  head: () => ({
    meta: [
      { title: "Etichete carton — hangtag personalizat haine | ETICHETT" },
      { name: "description", content: "Etichete carton (hangtag) personalizate pentru haine: brand, preț, cod de bare, țara de origine. Carton premium, finisaje variate. Producător Cluj." },
      { name: "keywords", content: "etichete carton, etichete carton personalizate, hangtag, hangtag personalizat, etichete carton haine, etichete carton cluj, etichete hartie carton" },
      { property: "og:title", content: "Etichete carton — hangtag personalizat haine | ETICHETT" },
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
  }),
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
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete carton <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
