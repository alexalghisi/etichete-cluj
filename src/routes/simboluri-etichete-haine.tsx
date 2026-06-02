import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/simboluri-etichete-haine")({
  component: SimboluriEticheteHaine,
  head: () => ({
    meta: [
      { title: "Simboluri etichete haine — ghid complet spălare & îngrijire" },
      { name: "description", content: "Ghid complet simboluri etichete haine: spălare, înălbire, uscare, călcare, curățare chimică. Explicații clare + etichete personalizate la comandă." },
      { name: "keywords", content: "simboluri etichete haine, simboluri spalare haine, simboluri haine, semne etichete haine, simboluri ingrijire textile, etichete compozitie simboluri" },
      { property: "og:title", content: "Simboluri etichete haine — ghid complet" },
      { property: "og:description", content: "Ce înseamnă fiecare simbol de pe eticheta hainelor — spălare, uscare, călcare." },
      { property: "og:url", content: "https://etichetetextile.ro/simboluri-etichete-haine" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/simboluri-etichete-haine" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Simboluri etichete haine", item: "https://etichetetextile.ro/simboluri-etichete-haine" },
          ],
        }),
      },
    ],
  }),
});

const grupuri = [
  {
    titlu: "Spălare (lighean cu apă)",
    items: [
      ["Lighean cu cifră (30°, 40°, 60°, 90°)", "Spălare la temperatura indicată"],
      ["Lighean cu mână", "Spălare doar manuală"],
      ["Lighean cu o linie sub el", "Program delicat — centrifugare redusă"],
      ["Lighean cu două linii", "Program foarte delicat (lână)"],
      ["Lighean tăiat cu X", "Nu se spală — doar curățare chimică"],
    ],
  },
  {
    titlu: "Înălbire (triunghi)",
    items: [
      ["Triunghi gol", "Permite înălbire cu clor sau oxigen"],
      ["Triunghi cu două linii diagonale", "Doar înălbitor pe bază de oxigen (fără clor)"],
      ["Triunghi tăiat cu X", "Nu se înălbește"],
    ],
  },
  {
    titlu: "Uscare (pătrat)",
    items: [
      ["Pătrat cu cerc", "Permite uscare în uscător"],
      ["Pătrat cu cerc + un punct", "Uscător la temperatură joasă"],
      ["Pătrat cu cerc + două puncte", "Uscător la temperatură normală"],
      ["Pătrat cu cerc tăiat cu X", "Nu se usucă în uscător"],
      ["Pătrat cu linie orizontală", "Uscare pe orizontală (pe suport plat)"],
      ["Pătrat cu linie verticală", "Uscare pe verticală (pe umeraș)"],
    ],
  },
  {
    titlu: "Călcare (fier de călcat)",
    items: [
      ["Fier cu un punct", "Călcat la temperatură joasă (max 110°C) — sintetice"],
      ["Fier cu două puncte", "Călcat la temperatură medie (max 150°C) — lână, mătase"],
      ["Fier cu trei puncte", "Călcat la temperatură mare (max 200°C) — bumbac, in"],
      ["Fier tăiat cu X", "Nu se calcă"],
    ],
  },
  {
    titlu: "Curățare chimică (cerc)",
    items: [
      ["Cerc cu literă (P, F, W)", "Curățare chimică profesională cu solvent specific"],
      ["Cerc tăiat cu X", "Nu se curăță chimic"],
    ],
  },
];

function SimboluriEticheteHaine() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Ghid · Informare"
        title="Simboluri etichete haine — ghid complet"
        subtitle="Ce înseamnă fiecare simbol de pe eticheta hainelor — spălare, înălbire, uscare, călcare, curățare chimică. Standard ISO 3758."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Simboluri etichete haine</span>
        </nav>
        <p className="text-muted-foreground">
          Toate <strong>simbolurile de pe etichetele hainelor</strong> urmează standardul internațional ISO 3758 și sunt obligatorii pe produsele textile vândute în UE. Mai jos găsești cele 5 grupuri de simboluri și ce înseamnă fiecare.
        </p>
        <div className="mt-10 space-y-10">
          {grupuri.map((g) => (
            <section key={g.titlu}>
              <h2 className="text-xl font-bold md:text-2xl">{g.titlu}</h2>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
                {g.items.map(([s, d]) => (
                  <li key={s} className="grid gap-1 p-4 md:grid-cols-[1fr_2fr] md:items-center md:gap-6">
                    <span className="font-semibold text-foreground">{s}</span>
                    <span className="text-sm text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">Vrei etichete cu simboluri pentru brandul tău?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Producem <Link to="/etichete-textile" className="text-primary underline">etichete textile de compoziție</Link> și <Link to="/etichete-haine" className="text-primary underline">etichete pentru haine</Link> cu simboluri ISO 3758 incluse — în multiple limbi.
          </p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Cere ofertă <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <FaqSection
        pageUrl="https://etichetetextile.ro/simboluri-etichete-haine"
        items={[
          { q: "Sunt obligatorii simbolurile pe eticheta hainelor?", a: "Da. Regulamentul UE 1007/2011 impune obligativitatea etichetei de compoziție, iar standardul ISO 3758 reglementează simbolurile de îngrijire (spălare, uscare, călcare)." },
          { q: "Ce înseamnă un lighean tăiat cu X?", a: "Înseamnă că produsul NU se spală nici manual, nici în mașină. Trebuie curățat chimic la o curățătorie profesională." },
          { q: "Ce înseamnă cifra din interiorul ligheanului?", a: "Temperatura maximă recomandată pentru spălare, în grade Celsius. Cele mai frecvente: 30°C (delicate), 40°C (uzual), 60°C (bumbac alb), 90°C (sterilizare)." },
          { q: "Pot tipări etichete cu simboluri ISO 3758?", a: "Da. Producem etichete textile cu toate simbolurile ISO 3758 incluse, în textul în română, engleză sau alte limbi — pentru export." },
          { q: "Câte simboluri trebuie să apară pe o etichetă?", a: "Minim 5: spălare, înălbire, uscare, călcare, curățare chimică. Plus compoziția materialului și mărimea." },
        ]}
      />
    </PageLayout>
  );
}
