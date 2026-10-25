import { createFileRoute } from "@tanstack/react-router";
import { PrintServicePage } from "@/components/PrintServicePage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { printServiceHead } from "@/lib/print-service-head";

export const Route = createFileRoute("/carti-de-vizita-cluj")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/carti-de-vizita-cluj" } }),
  head: ({ loaderData }) => applySeo(printServiceHead("carti-de-vizita-cluj"), loaderData),
  component: () => <PrintServicePage slug="carti-de-vizita-cluj" />,
});
