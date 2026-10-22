export const SITE_URL = "https://etichetetextile.ro";
export const CANONICAL_REDIRECTS: Record<string, string> = {
  "/etichete-saten": "/etichete-satin",
  "/etichete-cluj-napoca": "/etichete-cluj",
};
export function canonicalPath(path: string): string {
  const clean = path === "/" ? path : path.replace(/\/+$/, "");
  return CANONICAL_REDIRECTS[clean] ?? clean;
}
export const AUDIT_TITLES: Record<string, string> = {
  "/": "Etichete textile personalizate pentru haine | Producător Cluj din 1993",
  "/etichete-personalizate": "Etichete personalizate cu logo pentru haine și branduri | Etichett Prod",
  "/etichete-haine": "Etichete haine personalizate — țesute, satin, termoadezive | Etichett Prod",
  "/etichete-termoadezive": "Etichete termoadezive pentru haine, personalizate | Etichett Prod",
  "/etichete-haine-copii": "Etichete cu nume pentru haine copii — grădiniță și școală | Etichett Prod",
  "/etichete-carton": "Etichete carton personalizate (hangtag) pentru haine | Etichett Prod",
  "/simboluri-etichete-haine": "Simboluri etichete haine: ce înseamnă (ghid ISO 3758 cu imagini)",
};
export const HOME_H1 = "Etichete textile personalizate — producător din Cluj-Napoca";
export function protectedSeoField(path: string, field: string): boolean {
  return (field === "title" && Boolean(AUDIT_TITLES[path])) || (field === "h1" && path === "/");
}
export function brandTitle(title: string): string {
  return title.replace(/\bETICHETT(?: PROD)?\b|\bEtichett\b(?! Prod)/g, "Etichett Prod");
}
export function seoDescription(value: string): string {
  const cta = "Cere ofertă gratuită în 24h";
  if (value.length >= 140 && value.length <= 155 && value.includes(cta)) return value;
  const words = value.replace(/Cere ofertă gratuită în 24h[.!]?/g, "").trim().replace(/[.!]+$/, "").split(/\s+/);
  while (`${words.join(" ")}. ${cta}.`.length > 155 && words.length > 1) words.pop();
  let description = `${words.join(" ")}. ${cta}.`;
  if (description.length < 140) description = `${words.join(" ")}. Etichett Prod. ${cta}.`;
  return description;
}
export function mergeFaqs<T extends { q: string; a: string }>(...groups: T[][]): T[] {
  const seen = new Set<string>();
  return groups.flat().filter((faq) => {
    const key = faq.q.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!faq.q.trim() || !faq.a.trim() || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}