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
      { title: "Etichete textile personalizate Cluj-Napoca | ETICHETT PROD" },
      { name: "description", content: "Etichete personalizate, etichete textile, etichete haine, țesute, imprimate, satin, nylon, carton, autoadezive și termoadezive. Producător în Cluj-Napoca, 30+ ani experiență." },
      { name: "keywords", content: "etichete, etichete cluj, etichete cluj-napoca, etichete textile, etichete personalizate, etichete haine, etichete haine personalizate, etichete pentru haine, etichete tesute, etichete imprimate, etichete satina, etichete satin, etichete carton, etichete nylon, etichete autoadezive, etichete autocolante, etichete autocolante personalizate, etichete termoadezive, etichete termoadezive pentru haine, simboluri etichete haine, etichete haine copii, etichete de compozitie, imprimanta etichete, imprimanta etichete autoadezive, producator etichete" },
      { name: "author", content: "ETICHETT PROD" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "-IlzVC_G80Q0f_I369W_7IEDLQfUTcpsbjnHwQNxfOc" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ETICHETT PROD" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5b1bf9e1-e660-4c90-819e-2465a38ddadf" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5b1bf9e1-e660-4c90-819e-2465a38ddadf" },
      { property: "og:title", content: "ETICHETT PROD — Producător etichete textile Cluj-Napoca" },
      { name: "twitter:title", content: "ETICHETT PROD — Producător etichete textile Cluj-Napoca" },
      { property: "og:description", content: "Producător etichete textile personalizate în Cluj-Napoca. Etichete țesute, imprimate, de compoziție, pentru haine, încălțăminte și branduri. Peste 30 ani experiență." },
      { name: "twitter:description", content: "Producător etichete textile personalizate în Cluj-Napoca. Etichete țesute, imprimate, de compoziție, pentru haine, încălțăminte și branduri. Peste 30 ani experiență." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
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
          url: "https://etichetetextile.ro/",
          telephone: ["+40747264832", "+40264599966"],
          email: "etichettprod@yahoo.com",
          foundingDate: "1993",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Str. Uzinei Electrice Nr. 9",
            addressLocality: "Cluj-Napoca",
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
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "87",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              itemReviewed: { "@type": "LocalBusiness", name: "ETICHETT PROD", "@id": "https://etichetetextile.ro/#business" },
              author: { "@type": "Person", name: "Andreea M." },
              datePublished: "2024-09-12",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
              reviewBody: "Etichete țesute impecabile pentru brandul nostru de haine. Calitate excelentă și livrare rapidă. Recomand!",
            },
            {
              "@type": "Review",
              itemReviewed: { "@type": "LocalBusiness", name: "ETICHETT PROD", "@id": "https://etichetetextile.ro/#business" },
              author: { "@type": "Person", name: "Radu P." },
              datePublished: "2024-07-03",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
              reviewBody: "Profesioniști adevărați. Au realizat exact etichetele de compoziție de care aveam nevoie, la un preț corect.",
            },
            {
              "@type": "Review",
              itemReviewed: { "@type": "LocalBusiness", name: "ETICHETT PROD", "@id": "https://etichetetextile.ro/#business" },
              author: { "@type": "Person", name: "Mihaela D." },
              datePublished: "2024-05-21",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
              reviewBody: "Colaborare de ani de zile cu ETICHETT PROD. Etichete personalizate de cea mai bună calitate din Cluj.",
            },
          ],
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
      <CookieConsent />
    </QueryClientProvider>
  );
}
