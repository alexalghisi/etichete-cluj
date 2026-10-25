/**
 * Optimised display variant of a local raster image: every /images/*.jpg|png has a
 * resized .webp sibling. The original files stay in place for og:image / JSON-LD.
 */
export function webp(src: string): string {
  return src.startsWith("/images/") ? src.replace(/\.(jpe?g|png)$/i, ".webp") : src;
}
