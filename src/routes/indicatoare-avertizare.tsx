import { createFileRoute } from "@tanstack/react-router";
import { PrintServicePage } from "@/components/PrintServicePage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { printServiceHead } from "@/lib/print-service-head";

export const Route = createFileRoute("/indicatoare-avertizare")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/indicatoare-avertizare" } }),
  head: ({ loaderData }) => applySeo(printServiceHead("indicatoare-avertizare"), loaderData),
  component: () => <PrintServicePage slug="indicatoare-avertizare" />,
});
