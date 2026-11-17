import { createFileRoute } from "@tanstack/react-router";
import { NewLabelPage } from "@/components/NewLabelPage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { NEW_LABEL_PAGES } from "@/lib/new-label-content";

const page = NEW_LABEL_PAGES["etichete-impermeabile"];
const url = "https://etichetetextile.ro/etichete-impermeabile";

export const Route = createFileRoute("/etichete-impermeabile")({
  loader: () => getSeoOverride({ data: { path: "/etichete-impermeabile" } }),
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  head: ({ loaderData }) =>
    applySeo(
      {
        meta: [
          { title: page.title },
          { name: "description", content: page.description },
          { property: "og:title", content: page.title },
          { property: "og:description", content: page.description },
          { property: "og:url", content: url },
          { property: "og:image", content: `https://etichetetextile.ro${page.image}` },
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: page.h1,
              description: page.description,
              url,
              image: `https://etichetetextile.ro${page.image}`,
              serviceType: "Producție etichete personalizate",
              provider: { "@id": "https://etichetetextile.ro/#business" },
              areaServed: ["România", "Cluj-Napoca"],
            }),
          },
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Acasă",
                  item: "https://etichetetextile.ro/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Produse",
                  item: "https://etichetetextile.ro/produse",
                },
                { "@type": "ListItem", position: 3, name: page.h1, item: url },
              ],
            }),
          },
        ],
      },
      loaderData,
    ),
  component: () => <NewLabelPage slug="etichete-impermeabile" />,
});
