import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">Pagina căutată nu există sau a fost mutată.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Înapoi acasă
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Pagina nu s-a încărcat</h1>
        <p className="mt-2 text-sm text-muted-foreground">A apărut o eroare. Reîncearcă sau revino mai târziu.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Reîncearcă</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Acasă</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1ab8d4" },
      { title: "ETICHETT PROD — Producător etichete textile Cluj-Napoca" },
      { name: "description", content: "Producător etichete textile personalizate în Cluj-Napoca. Etichete țesute, imprimate, de compoziție, pentru haine, încălțăminte și branduri. Peste 30 ani experiență." },
      { name: "keywords", content: "etichete cluj, etichete cluj-napoca, etichete textile, etichete personalizate, etichete haine, etichete tesute, etichete imprimate, etichete pentru imbracaminte, etichete autoadezive, etichete autocolante, etichete tesute, producator etichete" },
      { name: "author", content: "ETICHETT PROD" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ETICHETT PROD" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:image", content: "/images/hero-labels.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/hero-labels.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/images/logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://etichetetextile.ro/#business",
          name: "ETICHETT PROD",
          legalName: "S.C. ETICHETT PROD S.R.L.",
          description: "Producător de etichete textile personalizate din Cluj-Napoca: etichete țesute, imprimate, de compoziție pentru haine, încălțăminte, marochinărie și branduri.",
          telephone: ["+40747264832", "+40264599966"],
          email: "etichettprod@yahoo.com",
          foundingDate: "1993",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Str. Uzinei Electrice Nr. 9",
            addressLocality: "Cluj-Napoca",
            addressRegion: "Cluj",
            addressCountry: "RO",
          },
          areaServed: "RO",
          image: "/images/hero-labels.webp",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
