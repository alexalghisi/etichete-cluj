import { createFileRoute, redirect, Link } from "@tanstack/react-router";

// Map of legacy (WordPress) paths → current canonical paths.
// Kept exhaustive based on Google Search Console historic data so we recover
// link equity and stop 404s reported in GSC.
const REDIRECTS: Record<string, string> = {
  // Legacy product/category pages
  "etichete-uniforme": "/etichete-personalizate",
  "etichete-impermeabile": "/etichete-satin",
  "etichete-imbracaminte": "/etichete-haine",
  "etichete-mobilier": "/etichete-personalizate",
  "etichete-produse": "/produse",
  "panglici-personalizate": "/etichete-personalizate",
  "producator-etichete": "/despre-noi",

  // Legacy city pages (we now consolidate Cluj presence)
  "etichete-timisoara": "/etichete-personalizate",
  "etichete-iasi": "/etichete-personalizate",
  "etichete-bucuresti": "/etichete-personalizate",
  "etichete-brasov": "/etichete-personalizate",
  "etichete-sibiu": "/etichete-personalizate",
  "etichete-oradea": "/etichete-personalizate",
  "etichete-arad": "/etichete-personalizate",
  "etichete-constanta": "/etichete-personalizate",

  // Legacy guide/blog pages
  "etichete-compozitie-haine-ghid-ue": "/simboluri-etichete-haine",
  "etichete-tesute-vs-imprimate-comparatie": "/etichete-tesute",
  "cum-se-aplica-etichete-termoadezive-ghid": "/etichete-termoadezive",
  "simboluri-spalare-etichete": "/simboluri-etichete-haine",

  // Common variants
  "etichete-haine-personalizate": "/etichete-haine",
  "etichete-pentru-haine": "/etichete-haine",
  "etichete-de-compozitie": "/etichete-personalizate",
  "etichete-nylon": "/etichete-satin",
  "etichete-satina": "/etichete-satin",
  "etichete-textile-personalizate": "/etichete-textile",
};

// Routes that exist in the app — used to detect trailing-slash hits we should
// 301 to the canonical (no-slash) version.
const KNOWN_ROUTES = new Set([
  "despre-noi",
  "produse",
  "galerie",
  "contact",
  "etichete-textile",
  "etichete-personalizate",
  "etichete-haine",
  "etichete-haine-copii",
  "etichete-autocolante",
  "etichete-autoadezive",
  "etichete-termoadezive",
  "etichete-tesute",
  "etichete-satin",
  "etichete-carton",
  "etichete-cluj",
  "etichete-cluj-napoca",
  "simboluri-etichete-haine",
]);

function resolveRedirect(splat: string): string | null {
  // Normalize: strip leading/trailing slashes, lowercase
  const clean = splat.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!clean) return "/";

  // Trailing-slash on a known route (e.g. "produse/")
  if (KNOWN_ROUTES.has(clean)) return `/${clean}`;

  // Explicit legacy mapping
  if (REDIRECTS[clean]) return REDIRECTS[clean];

  // Common WP suffixes: /something/feed, /something/amp, /something/page/2
  const base = clean.split("/")[0];
  if (KNOWN_ROUTES.has(base)) return `/${base}`;
  if (REDIRECTS[base]) return REDIRECTS[base];

  return null;
}

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => {
    const splat = (params as { _splat?: string })._splat ?? "";
    const target = resolveRedirect(splat);
    if (target) {
      throw redirect({ href: target, statusCode: 301 });
    }
  },
  head: () => ({
    meta: [
      { title: "Pagina nu a fost găsită — ETICHETT PROD" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată. Mergi la pagina principală sau vezi catalogul de produse.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Acasă
          </Link>
          <Link to="/produse" className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">
            Vezi produsele
          </Link>
        </div>
      </div>
    </div>
  );
}
