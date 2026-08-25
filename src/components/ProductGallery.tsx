interface ProductGalleryProps {
  title: string;
  description?: string;
  /** image numbers from /images/gallery/etichete-textile-{n}.jpg */
  images: { n: number; alt: string }[];
}

export function ProductGallery({ title, description, images }: ProductGalleryProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <figure
            key={img.n}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={`/images/gallery/etichete-textile-${img.n}.jpg`}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              width={600}
              height={450}
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="px-3 py-2 text-xs text-muted-foreground">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
