import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/produse")({
  component: Produse,
  head: () => ({
    meta: [
      { title: "Produse — Etichete țesute, imprimate, personalizate | ETICHETT PROD" },
      { name: "description", content: "Gamă completă de etichete textile: țesute, imprimate, de compoziție, autoadezive, pentru branduri și haine. Producție în Cluj-Napoca, livrare națională." },
      { property: "og:title", content: "Produse etichete textile — ETICHETT PROD Cluj" },
      { property: "og:description", content: "Etichete țesute, imprimate, de compoziție, autoadezive, pentru îmbrăcăminte și branduri." },
      { property: "og:url", content: "/produse" },
      { property: "og:image", content: "/images/products/etichete-tesute.jpg" },
    ],
    links: [{ rel: "canonical", href: "/produse" }],
  }),
});

const products = [
  {
    title: "Etichete țesute",
    img: "/images/products/etichete-tesute.jpg",
    features: ["Rezoluție clară HD", "Una sau mai multe culori", "În role sau tăiate", "Pliate", "Pot fi autoadezive"],
  },
  {
    title: "Etichete imprimate",
    img: "/images/products/etichete-imprimate.jpg",
    features: ["Imprimare pe bumbac, poliester, poliamidă, saten", "Cu siglă sau compoziție", "Mai multe culori", "Imprimare față-verso", "În role sau tăiate"],
  },
  {
    title: "Etichete personalizate pentru branduri",
    img: "/images/products/etichete-personalizate.jpg",
    features: ["Design adaptat brandului tău", "Finisaje premium", "Materiale variate", "Etichete pentru colecții complete"],
  },
  {
    title: "Etichete de compoziție",
    img: "/images/products/etichete-compozitie.jpg",
    features: ["Conforme cu reglementările", "Multiple limbi", "Simboluri de spălare", "Rezistente la temperaturi ridicate"],
  },
  {
    title: "Etichete autoadezive & autocolante",
    img: "/images/products/etichete-branduri.jpg",
    features: ["Aplicare rapidă", "Suport flexibil pentru diverse materiale", "Imprimare HD", "Adeziv rezistent"],
  },
];

function Produse() {
  return (
    <PageLayout>
      <PageHero eyebrow="Produse" title="Etichete textile pentru orice produs" subtitle="De la proiectare și simulare grafică, până la livrarea produsului finit — gestionăm proiecte de orice complexitate." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="space-y-16">
          {products.map((p, i) => (
            <article key={p.title} className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <img src={p.img} alt={p.title} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">{p.title}</h2>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary"><Check className="h-4 w-4" /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Cere ofertă</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
