import { createFileRoute } from "@tanstack/react-router";
import { PrintServicePage } from "@/components/PrintServicePage";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { printServiceHead } from "@/lib/print-service-head";

export const Route = createFileRoute("/stickere-personalizate")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: () => getSeoOverride({ data: { path: "/stickere-personalizate" } }),
  head: ({ loaderData }) => applySeo(printServiceHead("stickere-personalizate"), loaderData),
  component: () => <PrintServicePage slug="stickere-personalizate" />,
});
