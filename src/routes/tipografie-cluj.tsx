import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { FaqSection } from "@/components/FaqSection";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { BUSINESS, factualFaq } from "@/lib/business-facts";
import { PRINT_SERVICES } from "@/lib/print-services-content";

const URL = "https://etichetetextile.ro/tipografie-cluj";

export const Route = createFileRoute("/tipografie-cluj")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/tipografie-cluj" } }),
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Tipografie Cluj: etichete, stickere, cărți de vizită, flyere | Etichett Prod" },
      { name: "description", content: "Tipografie și etichete în Cluj-Napoca: panglici cu logo, etichete alimentare, stickere, cărți de vizită, flyere și QR" },
      { name: "keywords", content: "tipografie cluj, tipografie cluj-napoca, print cluj, etichete personalizate, stickere personalizate, carti de vizita cluj, flyere cluj, panglica personalizata, etichete caserole, etichete cod qr" },
      { property: "og:title", content: "Tipografie și etichete personalizate Cluj | Etichett Prod" },
      { property: "og:description", content: "Etichete, panglici, stickere, cărți de vizită, flyere și indicatoare — totul într-un singur atelier din Cluj-Napoca." },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList", name: "Produse tipografice și etichete personalizate",
        itemListElement: PRINT_SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.h1, url: `https://etichetetextile.ro/${s.slug}` })),
      }),
    }],
  }, loaderData),
  component: Tipografie,
});

function Tipografie() {
  return (
    <PageLayout>
      <PageHero eyebrow="Nou · Tipografie și etichete" title="Tipografie și etichete personalizate în Cluj-Napoca" subtitle={`Pe lângă etichetele textile pe care le producem din ${BUSINESS.founded}, realizăm acum tot ce ține de identitatea și ambalajul produselor tale: panglici cu logo, etichete pentru alimente și borcane, coduri QR, stickere, cărți de vizită, flyere și indicatoare.`} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINT_SERVICES.map((s) => (
            <a key={s.slug} href={`/${s.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-elegant">
              <img src={s.image} alt={s.h1} width="600" height="600" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h2 className="text-lg font-bold group-hover:text-primary">{s.h1}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">Detalii <ArrowRight className="h-4 w-4" /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Un singur atelier pentru eticheta, ambalajul și reclama ta</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Majoritatea afacerilor mici au nevoie de aceleași lucruri: o etichetă pentru produs, un sticker pentru colet, o panglică pentru cadou, cărți de vizită și câteva flyere pentru lansare. Când le faci în locuri diferite, culorile și logoul nu mai arată la fel. La Etichett Prod pregătim toată grafica în CorelDRAW, o singură dată, și o folosim pe fiecare produs, ca brandul tău să fie recunoscut peste tot.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Avem birourile și atelierul de producție în Cluj-Napoca, pe {BUSINESS.street}. Poți veni să discuți macheta direct cu graficienii noștri sau poți comanda online, iar noi livrăm prin curier în toată România.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Cum comanzi</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Ne trimiți logoul, textul și ce produs dorești (sau doar o idee).</li>
              <li>Primești o ofertă și o simulare grafică gratuită.</li>
              <li>După aprobarea bunului de tipar intrăm în producție: {BUSINESS.production}.</li>
              <li>Ridici comanda din Cluj sau o primești prin curier.</li>
            </ol>
            <Link to="/cere-oferta" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Cere ofertă gratuită <ArrowRight className="h-4 w-4" /></Link>
          </article>
        </div>
      </section>
      <FaqSection pageUrl={URL} items={[
        { q: "Ce produse tipografice realizați în Cluj?", a: "Panglici personalizate, etichete pentru caserole și alimente, etichete pentru borcane și sticle, etichete cu cod QR, stickere, cărți de vizită, flyere, indicatoare de avertizare și imprimare pe accesorii textile — pe lângă etichetele textile." },
        { q: "Pot comanda mai multe produse cu aceeași grafică?", a: "Da. Pregătim grafica o singură dată și o adaptăm pentru etichete, stickere, cărți de vizită sau flyere, ca totul să arate unitar." },
        { q: "Cât costă produsele tipografice?", a: factualFaq("Cât costă produsele tipografice?", "", "/tipografie-cluj") },
        { q: "În cât timp livrați?", a: factualFaq("În cât timp livrați?", "", "/tipografie-cluj") },
      ]} />
    </PageLayout>
  );
}
