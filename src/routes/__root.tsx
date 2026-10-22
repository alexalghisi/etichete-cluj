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
import { CookieConsent } from "@/components/CookieConsent";
import { ConversionControls } from '@/components/ConversionControls';
import { BUSINESS } from '@/lib/business-facts';

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
      { name: "keywords", content: "etichete, etichete cluj, etichete cluj-napoca, etichete textile, etichete personalizate, etichete haine, etichete haine personalizate, etichete pentru haine, etichete tesute, etichete imprimate, etichete satina, etichete satin, etichete carton, etichete nylon, etichete autoadezive, etichete autocolante, etichete autocolante personalizate, etichete termoadezive, etichete termoadezive pentru haine, simboluri etichete haine, etichete haine copii, etichete de compozitie, imprimanta etichete, imprimanta etichete autoadezive, producator etichete" },
      { name: "author", content: "Etichett Prod" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "-IlzVC_G80Q0f_I369W_7IEDLQfUTcpsbjnHwQNxfOc" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Etichett Prod" },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=3", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png?v=3" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png?v=3" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=3" },
      { rel: "manifest", href: "/site.webmanifest?v=3" },
      { rel: "preload", as: "font", type: "font/ttf", crossOrigin: "anonymous", href: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-JR62EM794J", async: true },
      { children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;var c=null;try{c=localStorage.getItem("etichett-cookie-consent")}catch(e){}var g=c==="accepted"?"granted":"denied";gtag("consent","default",{ad_storage:g,analytics_storage:g,ad_user_data:g,ad_personalization:g,wait_for_update:500});gtag("js",new Date());gtag("config","G-JR62EM794J");window.addEventListener("cookie-consent",function(){var v="denied";try{v=localStorage.getItem("etichett-cookie-consent")==="accepted"?"granted":"denied"}catch(e){}gtag("consent","update",{ad_storage:v,analytics_storage:v,ad_user_data:v,ad_personalization:v});});` },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://etichetetextile.ro/#business",
          name: "Etichett Prod",
          legalName: "S.C. ETICHETT PROD S.R.L.",
          description: "Producător de etichete textile personalizate din Cluj-Napoca: etichete țesute, imprimate, de compoziție pentru haine, încălțăminte, marochinărie și branduri.",
          url: "https://etichetetextile.ro/",
          telephone: [BUSINESS.phoneHref.slice(4), BUSINESS.landlineHref.slice(4)],
          email: BUSINESS.email,
          foundingDate: String(BUSINESS.founded),
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.city,
            addressRegion: "Cluj",
            postalCode: "400000",
            addressCountry: "RO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.7712,
            longitude: 23.6236,
          },
          areaServed: [
            { "@type": "City", name: "Cluj-Napoca" },
            { "@type": "City", name: "Florești" },
            { "@type": "City", name: "Apahida" },
            { "@type": "City", name: "Baciu" },
            { "@type": "City", name: "Turda" },
            { "@type": "City", name: "Dej" },
            { "@type": "City", name: "Gherla" },
            { "@type": "AdministrativeArea", name: "Județul Cluj" },
            { "@type": "Country", name: "România" },
          ],
          image: "https://etichetetextile.ro/images/hero-labels.webp",
          logo: "https://etichetetextile.ro/images/logo.png",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent as never,
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
      <CookieConsent />
      <ConversionControls />
    </QueryClientProvider>
  );
}
