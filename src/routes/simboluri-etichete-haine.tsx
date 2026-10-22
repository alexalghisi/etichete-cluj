import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight } from "lucide-react";
import { CareSymbol, type CareSymbolProps } from "@/components/CareSymbol";

export const Route = createFileRoute("/simboluri-etichete-haine")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/simboluri-etichete-haine" } }),
  component: SimboluriEticheteHaine,
  head: ({ loaderData }) => applySeo({
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
  }, loaderData),
});

const grupuri: {
  titlu: string;
  items: { nume: string; desc: string; icon: CareSymbolProps }[];
}[] = [
  {
    titlu: "Spălare (lighean cu apă)",
    items: [
      { nume: "Lighean cu cifră (30°, 40°, 60°, 90°)", desc: "Spălare la temperatura indicată", icon: { shape: "basin", text: "30", label: "Lighean cu cifra 30 — spălare la 30°C" } },
      { nume: "Lighean cu mână", desc: "Spălare doar manuală", icon: { shape: "basin", hand: true, label: "Lighean cu mână — spălare manuală" } },
      { nume: "Lighean cu o linie sub el", desc: "Program delicat — centrifugare redusă", icon: { shape: "basin", bars: 1, label: "Lighean cu o linie — program delicat" } },
      { nume: "Lighean cu două linii", desc: "Program foarte delicat (lână)", icon: { shape: "basin", bars: 2, label: "Lighean cu două linii — program foarte delicat" } },
      { nume: "Lighean tăiat cu X", desc: "Nu se spală — doar curățare chimică", icon: { shape: "basin", crossed: true, label: "Lighean tăiat — nu se spală" } },
    ],
  },
  {
    titlu: "Înălbire (triunghi)",
    items: [
      { nume: "Triunghi gol", desc: "Permite înălbire cu clor sau oxigen", icon: { shape: "triangle", label: "Triunghi gol — se poate înălbi" } },
      { nume: "Triunghi cu două linii diagonale", desc: "Doar înălbitor pe bază de oxigen (fără clor)", icon: { shape: "triangle", stripes: true, label: "Triunghi cu linii — doar înălbitor pe bază de oxigen" } },
      { nume: "Triunghi tăiat cu X", desc: "Nu se înălbește", icon: { shape: "triangle", crossed: true, label: "Triunghi tăiat — nu se înălbește" } },
    ],
  },
  {
    titlu: "Uscare (pătrat)",
    items: [
      { nume: "Pătrat cu cerc", desc: "Permite uscare în uscător", icon: { shape: "square", circleInSquare: true, label: "Pătrat cu cerc — uscare în uscător" } },
      { nume: "Pătrat cu cerc + un punct", desc: "Uscător la temperatură joasă", icon: { shape: "square", circleInSquare: true, dots: 1, label: "Pătrat cu cerc și un punct — uscător la temperatură joasă" } },
      { nume: "Pătrat cu cerc + două puncte", desc: "Uscător la temperatură normală", icon: { shape: "square", circleInSquare: true, dots: 2, label: "Pătrat cu cerc și două puncte — uscător la temperatură normală" } },
      { nume: "Pătrat cu cerc tăiat cu X", desc: "Nu se usucă în uscător", icon: { shape: "square", circleInSquare: true, crossed: true, label: "Pătrat cu cerc tăiat — nu se usucă în uscător" } },
      { nume: "Pătrat cu linie orizontală", desc: "Uscare pe orizontală (pe suport plat)", icon: { shape: "square", dryLine: "horizontal", label: "Pătrat cu linie orizontală — uscare pe orizontală" } },
      { nume: "Pătrat cu linie verticală", desc: "Uscare pe verticală (pe umeraș)", icon: { shape: "square", dryLine: "vertical", label: "Pătrat cu linie verticală — uscare pe verticală" } },
    ],
  },
  {
    titlu: "Călcare (fier de călcat)",
    items: [
      { nume: "Fier cu un punct", desc: "Călcat la temperatură joasă (max 110°C) — sintetice", icon: { shape: "iron", dots: 1, label: "Fier cu un punct — călcat la temperatură joasă" } },
      { nume: "Fier cu două puncte", desc: "Călcat la temperatură medie (max 150°C) — lână, mătase", icon: { shape: "iron", dots: 2, label: "Fier cu două puncte — călcat la temperatură medie" } },
      { nume: "Fier cu trei puncte", desc: "Călcat la temperatură mare (max 200°C) — bumbac, in", icon: { shape: "iron", dots: 3, label: "Fier cu trei puncte — călcat la temperatură mare" } },
      { nume: "Fier tăiat cu X", desc: "Nu se calcă", icon: { shape: "iron", crossed: true, label: "Fier tăiat — nu se calcă" } },
    ],
  },
  {
    titlu: "Curățare chimică (cerc)",
    items: [
      { nume: "Cerc cu literă (P, F, W)", desc: "Curățare chimică profesională cu solvent specific", icon: { shape: "circle", text: "P", label: "Cerc cu litera P — curățare chimică profesională" } },
      { nume: "Cerc tăiat cu X", desc: "Nu se curăță chimic", icon: { shape: "circle", crossed: true, label: "Cerc tăiat — nu se curăță chimic" } },
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
                {g.items.map((it) => (
                  <li key={it.nume} className="grid items-center gap-3 p-4 md:grid-cols-[auto_1fr_2fr] md:gap-6">
                    <CareSymbol {...it.icon} />
                    <span className="font-semibold text-foreground">{it.nume}</span>
                    <span className="text-sm text-muted-foreground">{it.desc}</span>
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
