import { createFileRoute } from "@tanstack/react-router";
import { PrintServicePage } from "@/components/PrintServicePage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { printServiceHead } from "@/lib/print-service-head";

export const Route = createFileRoute("/etichete-coduri-qr")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-coduri-qr" } }),
  head: ({ loaderData }) => applySeo(printServiceHead("etichete-coduri-qr"), loaderData),
  component: () => <PrintServicePage slug="etichete-coduri-qr" />,
});
