import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/etichete-cluj-napoca")({
  loader: () => getSeoOverride({ data: { path: "/etichete-cluj-napoca" } }),
  component: EticheteClujNapoca,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Etichete Cluj-Napoca — producător textile | ETICHETT" },
      { name: "description", content: "Etichete Cluj-Napoca: producător local din 1993 de etichete textile — țesute, imprimate, satin, nylon, termoadezive pentru branduri." },
      { name: "keywords", content: "etichete cluj-napoca, etichete textile cluj-napoca, etichete personalizate cluj-napoca, etichete haine cluj-napoca, producator etichete cluj-napoca, etichete tesute cluj-napoca" },
      { property: "og:title", content: "Etichete Cluj-Napoca — producător textile | ETICHETT" },
      { property: "og:description", content: "Producător de etichete textile cu atelier în Cluj-Napoca. Etichete țesute, imprimate, satin, nylon, termoadezive pentru branduri." },
      { property: "og:url", content: "https://etichetetextile.ro/etichete-cluj-napoca" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/etichete-cluj-napoca" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: "https://etichetetextile.ro/" },
            { "@type": "ListItem", position: 2, name: "Etichete Cluj-Napoca", item: "https://etichetetextile.ro/etichete-cluj-napoca" },
          ],
        }),
      },
    ],
  }, loaderData),
});

function EticheteClujNapoca() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Cluj-Napoca · cartiere & zona metropolitană"
        title="Etichete Cluj-Napoca — producător local cu atelier propriu"
        subtitle="Producem etichete textile personalizate în Cluj-Napoca din 1993. Atelier pe Str. Uzinei Electrice nr. 9 — ridicare personală sau livrare în cartiere și în toată zona metropolitană."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground">Etichete Cluj-Napoca</span>
        </nav>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Etichete pentru branduri din Cluj-Napoca</h2>
            <p className="text-muted-foreground">
              Lucrăm cu branduri de haine, ateliere de croitorie, marochinărie și încălțăminte din toate cartierele din <strong>Cluj-Napoca</strong>: <em>Mănăștur, Mărăști, Gheorgheni, Zorilor, Centru, Bună Ziua, Andrei Mureșanu, Grigorescu, Iris, Dâmbul Rotund, Sopor, Borhanci</em>. Comenzile pentru clienții din oraș pot fi ridicate personal de la atelier sau livrate prin curier local în 24h.
            </p>

            <h3 className="text-2xl font-bold mt-10">Tipuri de etichete produse în Cluj-Napoca</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Etichete țesute (damasc, satin, taffeta)",
                "Etichete imprimate pe satin, bumbac, nylon",
                "Etichete personalizate haine cu logo",
                "Etichete termoadezive pentru haine",
                "Etichete autoadezive & autocolante",
                "Etichete de compoziție multilingve (RO/EN/DE/FR/IT)",
                "Etichete carton — hangtag-uri pentru branduri",
                "Etichete haine copii — soft, fără mâncărime",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /><span>{x}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mt-10">Zona metropolitană Cluj-Napoca</h3>
            <p className="text-muted-foreground">
              Livrăm și în zona metropolitană: <strong>Florești, Apahida, Baciu, Gilău, Chinteni, Feleacu, Sânnicoară</strong>. Pentru județul Cluj — Turda, Câmpia Turzii, Dej, Gherla, Huedin — folosim curier rapid în 24–48h.
            </p>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="text-lg font-bold">Vizitează atelierul</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Str. Uzinei Electrice Nr. 9, Cluj-Napoca</p>
              <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+40747264832" className="hover:text-primary">0747 264 832</a></p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Cere ofertă <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
