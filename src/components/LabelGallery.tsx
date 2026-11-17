import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export type GalleryImage = { src: string; alt: string };

/** Real workshop photos with an accessible lightbox; every image is SSR-rendered for image search. */
export function LabelGallery({
  title,
  images,
}: {
  title: string;
  images: readonly GalleryImage[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (!images.length) return null;
  const current = open === null ? null : images[open];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6" aria-labelledby="galerie-etichete">
      <h2 id="galerie-etichete" className="text-2xl font-bold md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Lucrări reale din atelierul nostru din Cluj-Napoca. Apasă pe o imagine pentru a o mări.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Mărește: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-background/80 p-1.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
              <span className="block px-3 py-2 text-xs text-muted-foreground">{img.alt}</span>
            </button>
          </li>
        ))}
      </ul>
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {current.alt} · {open! + 1}/{images.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Imaginea anterioară"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 md:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Imaginea următoare"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 md:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
