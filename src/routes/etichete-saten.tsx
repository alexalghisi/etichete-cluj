import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-saten")({
  component: EticheteSaten,
  head: () => ({
    meta: [
      { title: "Etichete saten (satin) imprimate — moi & premium | ETICHETT" },
      { name: "description", content: "Etichete saten personalizate — imprimate HD, moi, cu aspect perlat premium. Rezistente la spălare. Producător etichete textile Cluj-Napoca." },
      { name: "keywords", content: "etichete saten, etichete saten personalizate, etichete saten haine, etichete saten imprimate, etichete satena, etichete satin, etichete saten cluj" },
      { property: "og:title", content: "Etichete saten (satin) imprimate — moi & premium | ETICHETT" },
      { property: "og:description", content: "Etichete saten (satin) moi, cu aspect perlat, rezistente la spălare — ideale pentru branduri de modă." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-saten" },
      { property: "og:image", content: "https://etichetetextile.ro/images/materials/satin.png" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-saten" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete saten", item: "https://etichetetextile.ro/etichete-saten" },
          ],
        }),
      },
    ],
  }),
});

function EticheteSaten() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Saten / Satin"
        title="Etichete saten personalizate pentru haine"
        subtitle="„Saten” este forma folosită frecvent în limba română pentru satin — materialul textil moale, cu luciu perlat, folosit la etichetele premium pentru îmbrăcăminte."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete saten</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete saten — ce sunt & la ce folosesc</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichetele saten</strong> (sau <em>etichete satin</em>) sunt etichete textile imprimate pe material poliesteric cu țesătură satin — moale la atingere, cu aspect lucios elegant. Sunt cele mai cerute etichete pentru <em>tricouri, hanorace, rochii, lenjerie, haine copii</em> și pentru <em>etichete de compoziție</em> conforme UE.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Imprimare HD full-color, față-verso",
                "Aspect perlat premium",
                "Rezistente la spălări repetate la 60–90°C",
                "Moi — nu zgârie pielea",
                "Aplicare cusute sau termoadezive",
                "Se pretează pentru compoziție multilingvă",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete saten <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <img src="/images/materials/satin.png" alt="Etichete saten (satin) personalizate" className="mx-auto h-72 w-72 object-contain" loading="lazy" />
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold">Categorii înrudite</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Vezi și <Link to="/etichete-satin" className="font-semibold text-primary hover:underline">etichete satin</Link>,{" "}
            <Link to="/etichete-nylon" className="font-semibold text-primary hover:underline">etichete nylon</Link>,{" "}
            <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link> sau{" "}
            <Link to="/etichete-compozitie" className="font-semibold text-primary hover:underline">etichete de compoziție</Link>.
          </p>
        </div>
      </section>

      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-saten"
        items={[
          { q: "Care e diferența între „saten” și „satin”?", a: "„Saten” este forma populară românească a cuvântului „satin” — se referă la același material poliesteric cu țesătură lucioasă. În catalog folosim ambele forme." },
          { q: "Etichetele saten se decolorează la spălare?", a: "Nu, dacă sunt imprimate cu cerneluri profesionale pentru textile. Rezistă la spălări repetate la 60–90°C fără decolorare." },
          { q: "Pot avea compoziția în mai multe limbi?", a: "Da. Imprimăm față-verso, ceea ce permite RO/EN/DE/FR/IT + simboluri de spălare ISO 3758 pe o singură etichetă." },
          { q: "Care e cantitatea minimă?", a: "Pornim de la 100 buc. pentru etichete saten imprimate personalizat." },
          { q: "Livrați în toată România?", a: "Da. Producem în Cluj-Napoca și livrăm prin curier în 24–48h în toată țara." },
        ]}
      />
    </PageLayout>
  );
}
