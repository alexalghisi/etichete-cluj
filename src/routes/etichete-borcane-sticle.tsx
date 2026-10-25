import { createFileRoute } from "@tanstack/react-router";
import { PrintServicePage } from "@/components/PrintServicePage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { printServiceHead } from "@/lib/print-service-head";

export const Route = createFileRoute("/etichete-borcane-sticle")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/etichete-borcane-sticle" } }),
  head: ({ loaderData }) => applySeo(printServiceHead("etichete-borcane-sticle"), loaderData),
  component: () => <PrintServicePage slug="etichete-borcane-sticle" />,
});
