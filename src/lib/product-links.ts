import { canonicalPath } from "./seo-policy";

const PRODUCTS = [
  { match:/bumbac|cotton/i, to:"/etichete-bumbac",label:"etichete textile bumbac" },
  { match:/emblem|ecuson/i,to:"/embleme-tesute",label:"embleme țesute" },
  { match:/mărime|marime/i,to:"/etichete-marime",label:"etichete de mărime" },
  { match: /copii|gradinita|grădiniță/i, to: "/etichete-haine-copii", label: "etichete cu nume pentru haine copii" },
  { match: /simbol|spalare|spălare|întreținere|intretinere/i, to: "/simboluri-etichete-haine", label: "simboluri etichete haine" },
  { match: /compozi/i, to: "/etichete-compozitie", label: "etichete de compoziție" },
  { match: /termo|termocolant/i, to: "/etichete-termoadezive", label: "etichete termoadezive pentru haine" },
  { match: /autocolant|adeziv/i, to: "/etichete-autoadezive", label: "etichete autoadezive" },
  { match: /carton|hangtag/i, to: "/etichete-carton", label: "etichete carton personalizate" },
  { match: /nylon/i, to: "/etichete-nylon", label: "etichete nylon" },
  { match: /satin|saten/i, to: "/etichete-satin", label: "etichete satin" },
  { match: /tesut|țesut/i, to: "/etichete-tesute", label: "etichete țesute" },
  { match: /cluj/i, to: "/etichete-cluj", label: "etichete Cluj-Napoca" },
  { match: /textil/i, to: "/etichete-textile", label: "etichete textile" },
  { match: /haine/i, to: "/etichete-haine", label: "etichete pentru haine" },
  { match: /personaliz|logo|brand/i, to: "/etichete-personalizate", label: "etichete personalizate" },
];
export function relevantProducts(text: string) {
  const matches = PRODUCTS.filter((p) => p.match.test(text));
  const fallback = PRODUCTS.filter((p) => ["/etichete-textile", "/etichete-personalizate", "/etichete-haine"].includes(p.to));
  return [...new Map([...matches, ...fallback].map((p) => [p.to, p])).values()].slice(0, 3);
}
export function normalizeArticleLinks(content: string) {
  return content.replace(/href=(["'])(?:https:\/\/etichetetextile\.ro)?(\/etichete-(?:saten|cluj-napoca))\/?\1/g, (_, quote, path) => `href=${quote}${canonicalPath(path)}${quote}`);
}