import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";

const galleryImages = ([
 {
  "id": 1,
  "file": "role-banda-satin-etichete-textile",
  "alt": "Role de bandă satin și materiale pentru etichete textile în atelierul Etichett Prod Cluj",
  "w": 1200,
  "h": 900
 },
 {
  "id": 2,
  "file": "etichete-tesute-branduri-cluj",
  "alt": "Etichete țesute personalizate pentru branduri — Neumarkt, Isara, Artimex",
  "w": 1200,
  "h": 900
 },
 {
  "id": 3,
  "file": "etichete-tesute-personalizate-logo",
  "alt": "Etichete țesute personalizate cu logo, culori vii, producție Cluj-Napoca",
  "w": 1200,
  "h": 900
 },
 {
  "id": 4,
  "file": "etichete-compozitie-imprimate-satin",
  "alt": "Etichete de compoziție imprimate pe satin cu simboluri de întreținere",
  "w": 1200,
  "h": 900
 },
 {
  "id": 5,
  "file": "etichete-imprimate-bumbac-logo",
  "alt": "Etichete imprimate pe bumbac natur cu logo de brand",
  "w": 1200,
  "h": 900
 },
 {
  "id": 6,
  "file": "etichete-compozitie-cod-bare",
  "alt": "Etichete de compoziție multilingve cu cod de bare și etichetă Bebi Fashion",
  "w": 1200,
  "h": 900
 },
 {
  "id": 7,
  "file": "etichete-bumbac-imprimate-branduri",
  "alt": "Etichete imprimate pe bumbac pentru branduri românești de modă",
  "w": 1200,
  "h": 900
 },
 {
  "id": 8,
  "file": "etichete-satin-imprimate-haine",
  "alt": "Etichete satin imprimate pentru haine, cu mărime și compoziție",
  "w": 1200,
  "h": 900
 },
 {
  "id": 9,
  "file": "etichete-textile-personalizate-color",
  "alt": "Etichete textile personalizate imprimate color pentru firme",
  "w": 1200,
  "h": 900
 },
 {
  "id": 10,
  "file": "etichete-compozitie-instructiuni-spalare",
  "alt": "Etichete de compoziție cu instrucțiuni de spălare, 100% bumbac",
  "w": 1200,
  "h": 900
 },
 {
  "id": 11,
  "file": "etichete-imprimate-logo-color",
  "alt": "Etichete imprimate cu logo color pentru haine și accesorii",
  "w": 1200,
  "h": 900
 },
 {
  "id": 12,
  "file": "etichete-tesute-negre-auriu",
  "alt": "Etichete țesute negre cu fir auriu pentru branduri premium",
  "w": 1200,
  "h": 900
 },
 {
  "id": 13,
  "file": "etichete-carton-hangtag-carisma",
  "alt": "Etichetă carton hangtag imprimată color pentru brand de îmbrăcăminte",
  "w": 900,
  "h": 1200
 },
 {
  "id": 14,
  "file": "eticheta-carton-hangtag-alb",
  "alt": "Etichetă carton hangtag albă cu logo imprimat",
  "w": 900,
  "h": 1200
 },
 {
  "id": 15,
  "file": "eticheta-carton-bebi-fashion",
  "alt": "Etichetă carton personalizată Bebi Fashion pentru haine copii",
  "w": 1200,
  "h": 900
 },
 {
  "id": 16,
  "file": "eticheta-carton-geosim",
  "alt": "Etichetă carton albă cu logo pentru brand de haine",
  "w": 900,
  "h": 1200
 },
 {
  "id": 17,
  "file": "eticheta-carton-rosie-amadeus",
  "alt": "Etichetă carton roșie cu motiv tradițional românesc",
  "w": 1200,
  "h": 900
 },
 {
  "id": 18,
  "file": "eticheta-carton-neagra-folio-aur",
  "alt": "Etichetă carton neagră cu logo în folio auriu",
  "w": 1200,
  "h": 900
 },
 {
  "id": 19,
  "file": "eticheta-piele-ecologica-karina",
  "alt": "Etichetă din piele ecologică gravată pentru colecție de haine",
  "w": 702,
  "h": 592
 },
 {
  "id": 20,
  "file": "eticheta-piele-isara-gravata",
  "alt": "Etichetă din piele gravată cu logo Isara",
  "w": 1200,
  "h": 900
 },
 {
  "id": 21,
  "file": "eticheta-piele-marsupi",
  "alt": "Etichetă din piele ecologică cu logo imprimat",
  "w": 1200,
  "h": 900
 },
 {
  "id": 22,
  "file": "eticheta-piele-blugi-viorex",
  "alt": "Etichetă din piele pentru blugi, gravată în relief",
  "w": 1200,
  "h": 900
 },
 {
  "id": 23,
  "file": "eticheta-piele-blugi-gentiles",
  "alt": "Etichetă din piele pentru blugi Gentiles Jeans",
  "w": 1200,
  "h": 900
 },
 {
  "id": 24,
  "file": "etichete-piele-gravate-colectie",
  "alt": "Colecție de etichete din piele gravate pentru blugi și genți",
  "w": 1200,
  "h": 900
 }
] as { id: number; file: string; alt: string; w: number; h: number }[]).map((g) => ({
  ...g,
  src: `/images/gallery/${g.file}.webp`,
  absoluteSrc: `https://etichetetextile.ro/images/gallery/${g.file}.webp`,
}));

export const Route = createFileRoute("/galerie")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/galerie" } }),
  component: Galerie,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Galerie etichete textile — proiecte Cluj | Etichett Prod" },
      { name: "description", content: "Galerie etichete textile personalizate realizate de Etichett Prod în Cluj-Napoca: țesute, imprimate, pentru branduri și ateliere." },
      { property: "og:title", content: "Galerie etichete textile — proiecte Cluj | Etichett Prod" },
      { property: "og:description", content: "Proiecte realizate: etichete textile personalizate țesute și imprimate pentru branduri de îmbrăcăminte." },
      { property: "og:url", content: "https://etichetetextile.ro/galerie" },
      { property: "og:image", content: "https://etichetetextile.ro/images/gallery/etichete-tesute-personalizate-logo.webp" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/galerie" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galerie etichete textile Etichett Prod",
          url: "https://etichetetextile.ro/galerie",
          description: "Etichete textile personalizate produse de Etichett Prod în atelierul din Cluj-Napoca.",
          image: galleryImages.map((image) => ({
            "@type": "ImageObject",
            contentUrl: image.absoluteSrc,
            name: image.alt,
            caption: image.alt,
            width: image.w,
            height: image.h,
          })),
        }),
      },
    ],
  }, loaderData),
});

function Galerie() {
  return (
    <PageLayout>
      <PageHero eyebrow="Galerie" title="Etichete textile realizate" subtitle="O selecție din proiectele noastre — etichete textile personalizate produse în atelierul Etichett Prod din Cluj-Napoca." />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((image) => (
            <figure key={image.id} className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-elegant">
              <img
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                className="h-auto w-full object-cover transition-transform hover:scale-105"
                loading={image.id <= 3 ? "eager" : "lazy"}
                decoding="async"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
