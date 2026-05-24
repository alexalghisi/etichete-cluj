import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";

const galleryImages = [3, 4, 5, 6, 7, 8, 9, 10].map((n, index) => ({
  id: n,
  src: `/images/gallery/etichete-textile-${n}.jpg`,
  absoluteSrc: `https://etichetetextile.ro/images/gallery/etichete-textile-${n}.jpg`,
  alt: `Etichete textile personalizate — proiect ${index + 1} realizat de ETICHETT PROD Cluj`,
}));

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
          image: galleryImages.map((image) => ({
            "@type": "ImageObject",
            contentUrl: image.absoluteSrc,
            name: image.alt,
          })),
        }),
      },
    ],
  }),
});

function Galerie() {
  return (
    <PageLayout>
      <PageHero eyebrow="Galerie" title="Etichete textile realizate" subtitle="O selecție din proiectele noastre — etichete textile personalizate produse în atelierul ETICHETT PROD din Cluj-Napoca." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((image) => (
            <figure key={image.id} className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-elegant">
              <img
                src={image.src}
                alt={image.alt}
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
