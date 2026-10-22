import { BUSINESS, MINIMUM_SUMMARY, factualFaq } from "@/lib/business-facts";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-compozitie")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-compozitie" } }),
  component: EticheteCompozitie,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete de compoziție multilingve — RO/EN/DE/FR/IT | Etichett Prod" },
      { name: "description", content: "Etichete de compoziție pentru haine, cu fibre și simboluri ISO 3758, în RO/EN/DE/FR/IT. Imprimare față-verso pe satin sau. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "etichete compozitie, etichete de compozitie, etichete compozitie haine, etichete compozitie multilingve, etichete spalare, etichete iso 3758, etichete cluj" },
      { property: "og:title", content: "Etichete de compoziție multilingve — RO/EN/DE/FR/IT | Etichett Prod" },
      { property: "og:description", content: "Etichete de compoziție conforme UE, cu simboluri de spălare și fibre în mai multe limbi." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-compozitie" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-compozitie" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete de compoziție", item: "https://etichetetextile.ro/etichete-compozitie" },
          ],
        }),
      },
    ],
  }, loaderData),
});

function EticheteCompozitie() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Material · Satin / Nylon"
        title="Etichete de compoziție pentru haine — multilingve"
        subtitle="Etichete de compoziție conforme cu Regulamentul UE 1007/2011: fibre în procente; opțional, origine și simboluri ISO 3758 după cerințele produsului — în până la 5 limbi (RO/EN/DE/FR/IT)."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete de compoziție</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Ce trebuie să conțină o etichetă de compoziție</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Eticheta de compoziție</strong> indică fibrele și procentele conform Regulamentului UE 1007/2011, în domeniul său de aplicare. Simbolurile de întreținere și originea au cerințe distincte și nu sunt impuse în general de acest regulament.
            </p>
            <p className="mt-4 text-muted-foreground">Pentru identitatea brandului poți alege <Link to="/etichete-tesute" className="font-semibold text-primary hover:underline">etichete țesute</Link>; pentru aplicare fără cusături, <Link to="/etichete-termoadezive" className="font-semibold text-primary hover:underline">etichete termoadezive pentru haine</Link>. Consultă și ghidul <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">simboluri etichete haine</Link> pentru instrucțiunile de îngrijire.</p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Procent exact al fibrelor (ex: 95% bumbac, 5% elastan)",
                "Simboluri ISO 3758 pentru spălare, uscare, călcat",
                "Țara de origine (Made in ...)",
                "Traduceri: RO / EN / DE / FR / IT",
                "Imprimare față-verso pe satin sau nylon",
                "Aplicare cusute sau termoadezive",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
            <Link to="/cere-oferta" search={{tip:"compozitie"}} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Cere ofertă etichete compoziție <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="space-y-4">
            <h3 className="text-xl font-bold">Materiale recomandate</h3>
            <p className="text-muted-foreground">
              Pentru <strong>etichete de compoziție</strong> folosim satin (aspect premium, moale pe piele) sau nylon (foarte subțire, rezistent). Ambele acceptă imprimare HD față-verso, ceea ce permite includerea traducerilor în mai multe limbi pe o singură etichetă.
            </p>
            <p className="text-muted-foreground">
              Vezi și <Link to="/etichete-satin" className="font-semibold text-primary hover:underline">etichete satin</Link>, <Link to="/etichete-nylon" className="font-semibold text-primary hover:underline">etichete nylon</Link> sau <Link to="/simboluri-etichete-haine" className="font-semibold text-primary hover:underline">ghidul simbolurilor ISO 3758</Link>.
            </p>
          </article>
        </div>
      </section>

      <FaqSection
        pageUrl="https://etichetetextile.ro/etichete-compozitie"
        items={[
          { q: "Sunt obligatorii etichetele de compoziție?", a: factualFaq('Sunt obligatorii etichetele de compoziție?', 'Da. Regulamentul UE 1007/2011 impune ca orice articol textil vândut în UE să aibă etichetă cu compoziția fibrelor exprimată în procente.', '/etichete-compozitie') },
          { q: "În câte limbi pot avea traducerea?", a: factualFaq('În câte limbi pot avea traducerea?', 'Standard imprimăm în RO/EN/DE/FR/IT. La cerere adăugăm și alte limbi (HU, PL, ES, NL etc.) folosind imprimare față-verso.', '/etichete-compozitie') },
          { q: "Ce simboluri de spălare folosiți?", a: factualFaq('Ce simboluri de spălare folosiți?', 'Simbolurile standard ISO 3758: spălare, înălbire, uscare, călcat, curățare chimică — cu variantele pentru fiecare temperatură și restricție.', '/etichete-compozitie') },
          { q: "Etichetele de compoziție se pot combina cu logoul?", a: factualFaq('Etichetele de compoziție se pot combina cu logoul?', 'Da. Recomandăm etichetă separată de brand (țesută) + etichetă de compoziție (imprimată pe satin) — cea mai comună combinație pentru branduri de fashion.', '/etichete-compozitie') },
          { q: "Ce material recomandați pentru haine copii?", a: factualFaq('Ce material recomandați pentru haine copii?', 'Satin moale, imprimat cu cerneluri fără solvenți, cu opțiune termoadezivă pentru a evita cusăturile care irită pielea.', '/etichete-compozitie') },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6"><Link to="/generator-eticheta-compozitie" className="font-semibold text-primary underline">Generator gratuit de etichete de compoziție și întreținere</Link></div>
    </PageLayout>
  );
}
