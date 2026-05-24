import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";

export const Route = createFileRoute("/galerie")({
  component: Galerie,
  head: () => ({
    meta: [
      { title: "Galerie etichete textile — proiecte | ETICHETT PROD" },
      { name: "description", content: "Galerie cu etichete textile personalizate realizate de ETICHETT PROD: țesute, imprimate și pentru branduri din România." },
      { property: "og:title", content: "Galerie etichete textile | ETICHETT PROD" },
      { property: "og:description", content: "Vezi proiecte realizate: etichete textile personalizate pentru branduri." },
      { property: "og:url", content: "https://etichetetextile.ro/galerie" },
      { property: "og:image", content: "https://etichetetextile.ro/images/gallery/etichete-textile-3.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/galerie" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galerie etichete textile ETICHETT PROD",
          url: "https://etichetetextile.ro/galerie",
          description: "Etichete textile personalizate produse de ETICHETT PROD în atelierul din Cluj-Napoca.",
          image: [3, 4, 5, 6, 7, 8, 9, 10].map((n) => ({
            "@type": "ImageObject",
            contentUrl: `https://etichetetextile.ro/images/gallery/etichete-textile-${n}.jpg`,
            name: `Etichete textile personalizate — proiect ${n - 2}`,
          })),
        }),
      },
    ],
  }),
});

const images = [3, 4, 5, 6, 7, 8, 9, 10];

function Galerie() {
  return (
    <PageLayout>
      <PageHero eyebrow="Galerie" title="Etichete textile realizate" subtitle="O selecție din proiectele noastre — etichete textile personalizate produse în atelierul ETICHETT PROD din Cluj-Napoca." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((n, i) => (
            <figure key={n} className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-elegant">
              <img
                src={`/images/gallery/etichete-textile-${n}.jpg`}
                alt={`Etichete textile personalizate — proiect ${i + 1} realizat de ETICHETT PROD Cluj`}
                className="w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
