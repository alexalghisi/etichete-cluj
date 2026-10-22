import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/etichete-saten")({
  beforeLoad: () => { throw redirect({ to: "/etichete-satin", statusCode: 301 }); },
});
