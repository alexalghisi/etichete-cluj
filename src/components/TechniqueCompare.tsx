import { Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TECHNIQUES = [
  {
    id: "imprimata",
    label: "Imprimată",
    link: "Vezi etichete imprimate",
    to: "/etichete-imprimate",
    img: "/images/gallery/etichete-satin-imprimate-haine.webp",
    alt: "Etichete imprimate pe satin pentru haine",
    best: "Compoziție, mărimi, texte lungi, mai multe limbi",
    look: "Plată, pe satin, nylon sau bumbac",
    tip: "Ideală când informația se schimbă des de la un model la altul.",
  },
  {
    id: "tesuta",
    label: "Țesută",
    link: "Vezi etichete țesute",
    to: "/etichete-tesute",
    img: "/images/gallery/etichete-tesute-personalizate-logo.webp",
    alt: "Etichete țesute personalizate cu logo",
    best: "Logo de brand la gât sau în cusătură",
    look: "Desen format din fire, detalii fine, aspect premium",
    tip: "Alege-o pentru identitatea de brand care trebuie să arate la fel pe toată colecția.",
  },
  {
    id: "brodata",
    label: "Brodată",
    link: "Vezi etichete brodate",
    to: "/etichete-brodate",
    img: "/images/gallery/etichete-tesute-branduri-cluj.webp",
    alt: "Etichete țesute de brand — reper pentru alegerea între țesut și brodat",
    best: "Sigle vizibile pe uniforme, jachete, șepci",
    look: "Relief și culori pline, vizibile de la distanță",
    tip: "Potrivită pentru elemente exterioare; logourile foarte fine se simplifică.",
  },
] as const;

type Technique = (typeof TECHNIQUES)[number]["id"];

/** Interactive side-by-side of label techniques; all panels are SSR-rendered so the text stays indexable. */
export function TechniqueCompare({ initial = "imprimata" }: { initial?: Technique }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6" aria-labelledby="compara-tehnici">
      <h2 id="compara-tehnici" className="text-2xl font-bold md:text-3xl">
        Compară tehnicile: imprimată, țesută sau brodată
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Alege o variantă ca să vezi pentru ce se potrivește.
      </p>
      <Tabs defaultValue={initial} className="mt-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          {TECHNIQUES.map((t) => (
            <TabsTrigger key={t.id} value={t.id}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TECHNIQUES.map((t) => (
          <TabsContent
            key={t.id}
            value={t.id}
            forceMount
            className="mt-6 data-[state=inactive]:hidden"
          >
            <div className="grid gap-6 rounded-2xl border border-border bg-card p-5 md:grid-cols-[1fr_1.4fr] md:p-6">
              <img
                src={t.img}
                alt={t.alt}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold">Potrivită pentru</dt>
                  <dd className="mt-1 text-muted-foreground">{t.best}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Aspect</dt>
                  <dd className="mt-1 text-muted-foreground">{t.look}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Recomandare</dt>
                  <dd className="mt-1 text-muted-foreground">{t.tip}</dd>
                </div>
                <div>
                  <Link to={t.to} className="inline-block font-medium text-primary underline">
                    {t.link} →
                  </Link>
                </div>
              </dl>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
