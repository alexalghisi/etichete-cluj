import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CheckCircle2, Sparkles, Factory, Truck, Award, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Etichete personalizate Cluj — textile, țesute, imprimate" },
      { name: "description", content: "Etichete personalizate în Cluj-Napoca: etichete textile, țesute, imprimate, satin, carton și etichete adezive (autoadezive). Producător din 1993." },
      { name: "keywords", content: "etichete, etichete adezive, etichete adezive personalizate, etichete autoadezive, etichete adezive cluj, etichete cluj, etichete cluj-napoca, etichete textile, etichete personalizate, etichete haine, etichete haine personalizate, etichete personalizate haine, etichete pentru haine, etichete tesute, etichete imprimate, etichete satina, etichete satin, etichete carton, etichete nylon, etichete autocolante, etichete autocolante personalizate, etichete termoadezive, etichete termoadezive pentru haine, simboluri etichete haine, etichete haine copii, etichete de compozitie, imprimanta etichete, imprimanta etichete autoadezive, producator etichete, etichett prod" },
      { property: "og:title", content: "Etichete personalizate Cluj — textile, țesute, adezive" },
      { property: "og:description", content: "Etichete în Cluj: textile, țesute, imprimate, satin, carton, termoadezive și etichete adezive pentru haine și produse. Producător din 1993." },
      { property: "og:url", content: "https://etichetetextile.ro/" },
      { property: "og:image", content: "https://etichetetextile.ro/images/hero-labels.webp" },
    ],
    links: [
      { rel: "canonical", href: "https://etichetetextile.ro/" },
      { rel: "preload", as: "image", href: "/images/hero-collage.jpg", fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Ce sunt etichetele textile?", acceptedAnswer: { "@type": "Answer", text: "Etichetele textile sunt etichete țesute sau imprimate aplicate pe haine, încălțăminte, marochinărie sau textile, folosite pentru brand, compoziție, mărime și instrucțiuni de spălare." } },
            { "@type": "Question", name: "Unde găsesc etichete personalizate în Cluj?", acceptedAnswer: { "@type": "Answer", text: "Etichett Prod produce etichete personalizate în Cluj-Napoca din 1993 — etichete țesute, imprimate, satin, carton, autoadezive și termoadezive pentru haine." } },
            { "@type": "Question", name: "Faceți etichete termoadezive pentru haine?", acceptedAnswer: { "@type": "Answer", text: "Da, realizăm etichete termoadezive (transfer termic) pentru haine, aplicabile cu presa termică, plus etichete autoadezive și etichete cusute clasice." } },
            { "@type": "Question", name: "Care este cantitatea minimă pentru etichete haine personalizate?", acceptedAnswer: { "@type": "Answer", text: "Începem de la 100 de bucăți per model pentru etichete haine personalizate, astfel încât și brandurile mici să poată comanda." } },
            { "@type": "Question", name: "Ce simboluri pot apărea pe etichetele de haine?", acceptedAnswer: { "@type": "Answer", text: "Includem simbolurile standard pentru spălare, uscare, călcare, înălbire și curățare chimică conform ISO 3758, plus compoziția materialului în mai multe limbi." } },
            { "@type": "Question", name: "Produceți etichete adezive personalizate?", acceptedAnswer: { "@type": "Answer", text: "Da, producem etichete adezive (autoadezive) personalizate pe role, imprimate HD și decupate la formă, pentru ambalaje, cosmetice, borcane, vinuri și produse handmade." } },
          ],
        }),
      },
    ],
  }),
});

const materials = [
  { name: "Bumbac", img: "/images/materials/bumbac.png", text: "Țesătură de bumbac, alegere excelentă pentru etichetele imprimate aplicate pe haine." },
  { name: "Satin", img: "/images/materials/satin.png", text: "Material moale cu aspect perlat, rezistent la spălare, aburi și temperaturi ridicate." },
  { name: "Reșină / Nylon", img: "/images/materials/nylon.png", text: "Materiale pentru etichete de compoziție, cu variații adaptate aplicației finale." },
  { name: "Carton", img: "/images/materials/carton.png", text: "Hang-tag-uri din carton pentru marcă, preț (coduri de bare), țara de origine." },
];

function Index() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-collage.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Cluj-Napoca · din 1993
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Producător etichete textile <span className="text-primary">personalizate</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
              Etichete țesute, imprimate și embosate pentru haine, încălțăminte, marochinărie, mobilier și articole tehnice — fabricate în Cluj-Napoca, livrate în toată România.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                Cere o ofertă <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+40747264832" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
                <Phone className="h-4 w-4" /> 0747 264 832
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 30+ ani experiență</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Rezistente la spălare</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Livrare națională</span>
            </div>
          </div>
        </div>
      </section>


      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            { icon: Factory, t: "Producție proprie", s: "Atelier în Cluj-Napoca" },
            { icon: Award, t: "Calitate premium", s: "Materiale certificate" },
            { icon: Truck, t: "Livrare națională", s: "Curier rapid în toată RO" },
            { icon: Sparkles, t: "Design inclus", s: "De la grafică la produs final" },
          ].map((x) => (
            <div key={x.t} className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary"><x.icon className="h-5 w-5" /></div>
              <div>
                <p className="text-sm font-semibold text-foreground">{x.t}</p>
                <p className="text-xs text-muted-foreground">{x.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESPRE */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Despre Etichett Prod</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Etichete textile pentru branduri care contează</h2>
            <p className="mt-5 text-muted-foreground">
              <strong>Etichett Prod</strong> este un producător de etichete textile înființat în <strong>1993</strong>, specializat în <strong>etichete textile personalizate</strong> pentru îmbrăcăminte, încălțăminte, marochinărie, mobilier și articole tehnice.
            </p>
            <p className="mt-4 text-muted-foreground">
              Cu peste 30 de ani de experiență, oferim soluții complete — de la design și simulare grafică, până la produsul final livrat la tine.
            </p>
            <ul className="mt-6 grid gap-2 text-sm">
              {["Etichete textile pentru haine", "Etichete imprimate și țesute", "Etichete de compoziție", "Etichete personalizate pentru branduri", "Etichete autoadezive și autocolante"].map((x) => (
                <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {x}</li>
              ))}
            </ul>
            <Link to="/despre-noi" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Vezi mai mult <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/products/etichete-tesute.jpg" alt="Etichete textile țesute personalizate" className="aspect-square rounded-2xl object-cover" loading="lazy" />
            <img src="/images/products/etichete-imprimate.jpg" alt="Etichete textile imprimate pentru haine" className="mt-8 aspect-square rounded-2xl object-cover" loading="lazy" />
            <img src="/images/products/etichete-compozitie.jpg" alt="Etichete de compoziție pentru îmbrăcăminte" className="aspect-square rounded-2xl object-cover" loading="lazy" />
            <img src="/images/products/etichete-branduri.jpg" alt="Etichete personalizate pentru branduri" className="mt-8 aspect-square rounded-2xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* MATERIALE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Materiale folosite</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Materiale rezistente la spălare și uzură</h2>
            <p className="mt-4 text-muted-foreground">Alegem fiecare material în funcție de aplicația finală — pentru etichete care arată impecabil chiar și după zeci de spălări.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <article key={m.name} className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-elegant">
                <img src={m.img} alt={`Etichete textile din ${m.name}`} className="mx-auto h-24 w-24 object-contain transition-transform group-hover:scale-110" loading="lazy" />
                <h3 className="mt-4 text-center text-lg font-bold">{m.name}</h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO LOCAL */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/30 p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Cluj-Napoca · România</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Etichete Cluj — producător local, livrare în toată țara</h2>
              <p className="mt-5 text-muted-foreground">
                Suntem <strong>producător de etichete textile în Cluj-Napoca</strong> și livrăm în toată România. Lucrăm atât cu ateliere și producători locali din Cluj, cât și cu branduri naționale care vor etichete cu un finisaj impecabil.
              </p>
              <Link to="/etichete-cluj" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Etichete în Cluj-Napoca <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid gap-3 text-sm">
              {[
                "Etichete textile Cluj — atelier propriu",
                "Etichete personalizate pentru branduri clujene",
                "Etichete pentru haine, încălțăminte, marochinărie",
                "Etichete țesute & imprimate la cerere",
                "Etichete de compoziție conforme",
                "Etichete autoadezive și hang-tag-uri",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* SEO KEYWORDS CONTENT */}
      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Etichete haine personalizate — țesute, imprimate, termoadezive</h2>
            <p className="mt-3 text-muted-foreground">
              Producem <strong>etichete haine personalizate</strong> pentru branduri din România: <em>etichete pentru haine</em> țesute pe damasc, <em>etichete satin</em> imprimate HD, <em>etichete nylon</em> pentru sport, <em>etichete carton</em> (hangtag) și <em>etichete haine copii</em> moi, fără mâncărime. Lucrăm și cu <strong>etichete termoadezive pentru haine</strong> (transfer termic) aplicate cu presa.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Simboluri etichete haine & compoziție conformă</h2>
            <p className="mt-3 text-muted-foreground">
              Adăugăm pe etichetă toate <strong>simbolurile pentru etichete haine</strong> conform ISO 3758 — spălare, uscare, călcat, înălbit, curățare chimică. Plus <em>etichete de compoziție</em> în RO/EN/DE/FR/IT cu procentele exacte ale fibrelor și țara de origine, conform reglementărilor UE.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Etichete autoadezive & autocolante personalizate</h2>
            <p className="mt-3 text-muted-foreground">
              <strong>Etichete autoadezive</strong> și <strong>etichete autocolante personalizate</strong> pe role, pentru ambalaje, produse, borcane, cosmetice și textile. Imprimare HD color, forme decupate la cerere, adeziv puternic sau detașabil. Alternativă la <em>imprimanta de etichete autoadezive</em> — noi le tipărim în serie, la calitate de tipografie.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Etichete Cluj & Cluj-Napoca — primul producător local</h2>
            <p className="mt-3 text-muted-foreground">
              Când cauți <strong>etichete Cluj</strong> sau <strong>etichete Cluj-Napoca</strong>, Etichett Prod este alegerea naturală — atelier propriu pe Str. Uzinei Electrice nr. 9, peste 30 de ani de experiență, ridicare personală sau livrare prin curier în <em>Florești, Apahida, Baciu, Gilău, Turda, Dej, Gherla, Huedin</em> și toată România (București, Timișoara, Oradea, Sibiu, Brașov, Iași).
            </p>
          </article>
        </div>
      </section>


      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="gradient-hero overflow-hidden rounded-3xl px-8 py-14 text-center text-primary-foreground shadow-elegant md:px-14 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">Cere o ofertă personalizată pentru etichetele tale</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground">Trimite-ne grafica sau dezvoltăm una împreună. Stabilim toate detaliile și livrăm rapid.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-deep hover:scale-[1.02] transition">Cere ofertă</Link>
            <a href="mailto:etichettprod@yahoo.com" className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold hover:bg-white/10">etichettprod@yahoo.com</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
