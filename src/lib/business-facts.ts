export const BUSINESS = {
  name: "Etichett Prod", founded: 1993,
  phone: "0747 264 832", landline: "0264 599 966", phoneHref: "tel:+40747264832", landlineHref: "tel:+40264599966",
  email: "etichettprod@yahoo.com", street: "Str. Uzinei Electrice nr. 9", city: "Cluj-Napoca",
  address: "Str. Uzinei Electrice nr. 9, Cluj-Napoca",
  minimum: { printed: 100, woven: 500, children: 50, stickers: 500 },
  production: "5–10 zile lucrătoare de la aprobarea bunului de tipar", urgent: "Urgențe la cerere", price: "Preț la cerere",
  whatsapp: `https://wa.me/40747264832?text=${encodeURIComponent("Bună ziua, doresc o ofertă pentru etichete")}`,
} as const;
export const LABEL_TYPES = ["tesute", "satin", "nylon", "bumbac", "termoadezive", "carton", "autocolante", "compozitie", "copii"] as const;
export type LabelType = typeof LABEL_TYPES[number];
export const TYPE_NAMES: Record<LabelType, string> = { tesute: "Țesute", satin: "Satin", nylon: "Nylon", bumbac: "Bumbac", termoadezive: "Termoadezive", carton: "Carton / hangtag", autocolante: "Autocolante", compozitie: "Compoziție", copii: "Cu nume pentru copii" };
export function minimumFor(type: string): number | null {
  if (type === "tesute") return BUSINESS.minimum.woven;
  if (type === "copii") return BUSINESS.minimum.children;
  if (type === "autocolante" || type === "autoadezive") return BUSINESS.minimum.stickers;
  if (["satin", "nylon", "bumbac", "compozitie"].includes(type)) return BUSINESS.minimum.printed;
  return null;
}
export const MINIMUM_SUMMARY = `Imprimate (satin, nylon, bumbac): ${BUSINESS.minimum.printed} buc; țesute: ${BUSINESS.minimum.woven} buc/model; copii: ${BUSINESS.minimum.children} buc/nume; autocolante: ${BUSINESS.minimum.stickers} buc. Pentru celelalte variante confirmăm tirajul în ofertă.`;
/** Legacy CMS prose is normalized as well as source copy. */
export function factualText(text: string): string {
  return text.replace(/(?:de la|~|aproximativ)?\s*0[,.]\d+\s*(?:RON|lei)(?:\s*\/\s*(?:buc(?:ată)?\.?))?/gi, BUSINESS.price)
    .replace(/(?:\d+[––-]\d+|\d+)\s*(?:zile lucrătoare|zile|săptămâni)\s*(?:de la (?:aprobarea bunului de tipar|confirmarea designului))?/gi, BUSINESS.production)
    .replace(/(?:regim accelerat|urgențe)\s*\([^)]*\)/gi, BUSINESS.urgent);
}
export function factualFaq(q: string, a: string, path: string): string {
  if (/cantitat|comand.*minim/i.test(q)) {
    const type = path.replace('/etichete-', ''); const minimum = minimumFor(type === 'haine-copii' ? 'copii' : type);
    return minimum ? `Cantitatea minimă este ${minimum} buc${type === 'tesute' ? '/model' : type === 'haine-copii' ? '/nume' : ''}. ${BUSINESS.price}.` : MINIMUM_SUMMARY;
  }
  if (/cât.*(?:cost|preț)|prețul/i.test(q)) return `${BUSINESS.price}. Oferta depinde de material, dimensiuni, cantitate și personalizare.`;
  if (/cât.*(?:timp|dur)|termen|livrați/i.test(q)) return `${BUSINESS.production}. ${BUSINESS.urgent}.`;
  return factualText(a);
}