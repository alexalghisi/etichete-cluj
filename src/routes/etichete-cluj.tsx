import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-cluj")({
  loader: () => getSeoOverride({ data: { path: "/etichete-cluj" } }),
  component: EticheteCluj,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete Cluj — producător etichete textile | ETICHETT" },
      { name: "description", content: "Etichete Cluj: producător local de etichete textile personalizate — țesute, imprimate, satin, nylon, carton. Atelier în Cluj-Napoca." },
      { name: "keywords", content: "etichete cluj, etichete textile cluj, producator etichete cluj, etichete haine cluj, etichete personalizate cluj, etichete tesute cluj, etichete imprimate cluj" },
      { property: "og:title", content: "Etichete Cluj — producător etichete textile | ETICHETT" },
      { property: "og:description", content: "Producător de etichete textile în Cluj. Etichete personalizate, țesute, imprimate pentru branduri locale și naționale." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-cluj" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-cluj" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete Cluj", item: "https://etichetetextile.ro/etichete-cluj" },
          ],
        }),
      },
    ],
  }, loaderData),
});


function EticheteCluj() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Cluj-Napoca · Cluj"
        title="Etichete Cluj-Napoca — producător local din 1993"
        subtitle="Cauți etichete în Cluj? Suntem un producător local cu atelier propriu în Cluj-Napoca, specializat în etichete textile personalizate pentru branduri și ateliere de confecții."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">De ce să alegi un producător de etichete din Cluj-Napoca</h2>
            <p className="text-muted-foreground">Lucrăm direct cu producătorii și brandurile locale din Cluj-Napoca și din împrejurimi. Discutăm față în față, putem prelua și preda comenzi la atelier, iar timpul de producție este semnificativ redus comparativ cu un furnizor extern.</p>
            <p className="text-muted-foreground">Pentru branduri din toată țara, livrăm prin curier rapid în toată România.</p>

            <h3 className="text-2xl font-bold mt-10">Servicii pentru clienții din Cluj</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Etichete textile personalizate",
                "Etichete țesute pentru haine",
                "Etichete imprimate pe bumbac, satin, nylon",
                "Etichete de compoziție multilingve",
                "Etichete pentru îmbrăcăminte și încălțăminte",
                "Etichete autoadezive și hang-tag-uri din carton",
                "Etichete autocolante personalizate",
                "Etichete pentru marochinărie și mobilier",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /><span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mt-10">Etichete textile — întrebări frecvente (Cluj-Napoca)</h3>
            <div className="space-y-4">
              {[
                { q: "Cât durează producția unei comenzi de etichete textile?", a: "În funcție de complexitate și cantitate, livrarea variază între câteva zile și 2-3 săptămâni. Clienții din Cluj pot ridica direct de la atelier." },
                { q: "Care este cantitatea minimă pentru etichete personalizate?", a: "Lucrăm și cu cantități mici, adaptate pentru branduri în creștere. Contactează-ne pentru o ofertă personalizată." },
                { q: "Etichetele sunt rezistente la spălare?", a: "Da. Folosim coloranți speciali și imprimare la temperaturi înalte, astfel încât etichetele rezistă la spălare, frecare și călcat." },
                { q: "Livrați și în afara Clujului?", a: "Da, livrăm prin curier în toată România." },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="text-lg font-bold">Vizitează atelierul</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Str. Uzinei Electrice Nr. 9, Cluj-Napoca, jud. Cluj</p>
              <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+40747264832" className="hover:text-primary">0747 264 832</a></p>
              <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /> <a href="tel:0264599966" className="hover:text-primary">0264 599 966</a></p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Cere ofertă <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Locație Etichett Prod Cluj-Napoca"
                src="https://maps.google.com/maps?q=Strada+Uzinei+Electrice+9+Cluj-Napoca&z=15&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
