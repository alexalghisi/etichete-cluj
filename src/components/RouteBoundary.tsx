import { Link, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function RouteError({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return <div className="mx-auto max-w-md px-4 py-16 text-center"><h1 className="text-xl font-semibold">Pagina nu s-a încărcat</h1><p className="mt-2 text-muted-foreground">Reîncearcă în câteva momente.</p><Button className="mt-6" onClick={async () => { await router.invalidate(); reset(); }}>Reîncearcă</Button></div>;
}
export function RouteNotFound() {
  return <div className="mx-auto max-w-md px-4 py-16 text-center"><h1 className="text-4xl font-bold">Pagina nu a fost găsită</h1><p className="mt-4 text-muted-foreground">Pagina căutată nu există sau nu mai este disponibilă.</p><Button asChild className="mt-6"><Link to="/">Înapoi acasă</Link></Button></div>;
}