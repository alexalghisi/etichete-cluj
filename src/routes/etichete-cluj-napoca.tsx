import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/etichete-cluj-napoca")({
  beforeLoad: () => { throw redirect({ to: "/etichete-cluj", statusCode: 301 }); },
});
