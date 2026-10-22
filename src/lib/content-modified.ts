/** Recorded significant page edits, not build time or sitemap generation time. */
export const PAGE_CONTENT_MODIFIED: Record<string, string> = {
  "/cere-oferta": "2026-10-22T01:23:36Z",
  "/generator-eticheta-compozitie": "2026-10-22T01:23:36Z",
  "/etichete-bumbac": "2026-10-22T01:23:36Z",
  "/embleme-tesute": "2026-10-22T01:23:36Z",
  "/etichete-marime": "2026-10-22T01:23:36Z",
  "/producator-etichete": "2026-10-22T01:23:36Z",
  "/tricouri-personalizate-cluj": "2026-10-22T12:00:00Z",
  "/imprimare-textile-cluj": "2026-10-22T12:00:00Z",
  "/sepci-personalizate": "2026-10-22T12:00:00Z",
  "/broderie-cluj": "2026-10-22T12:00:00Z",
  "/": "2026-10-22T01:10:58Z",
  "/blog": "2026-10-22T01:10:58Z",
  "/despre-noi": "2026-10-22T01:10:58Z",
  "/produse": "2026-10-22T01:10:58Z",
  "/etichete-textile": "2026-10-22T01:10:58Z",
  "/etichete-personalizate": "2026-10-22T01:10:58Z",
  "/etichete-haine": "2026-10-22T01:10:58Z",
  "/etichete-autocolante": "2026-10-22T01:10:58Z",
  "/etichete-autoadezive": "2026-10-22T01:10:58Z",
  "/etichete-termoadezive": "2026-10-22T01:10:58Z",
  "/etichete-haine-copii": "2026-10-22T01:10:58Z",
  "/etichete-tesute": "2026-10-22T01:10:58Z",
  "/etichete-satin": "2026-10-22T01:10:58Z",
  "/etichete-nylon": "2026-10-22T01:10:58Z",
  "/etichete-compozitie": "2026-10-22T01:10:58Z",
  "/etichete-carton": "2026-10-22T01:10:58Z",
  "/etichete-cluj": "2026-10-22T01:10:58Z",
  "/simboluri-etichete-haine": "2026-10-22T01:10:58Z",
  "/galerie": "2026-10-22T01:10:58Z",
  "/contact": "2026-10-22T01:10:58Z",
};

export function latestContentDate(...dates: (string | null | undefined)[]): string | undefined {
  return dates.filter((d): d is string => Boolean(d) && Number.isFinite(Date.parse(d ?? "")))
    .sort((a, b) => Date.parse(b) - Date.parse(a))[0];
}