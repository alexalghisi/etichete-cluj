import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from './ui/button';
import { BUSINESS } from '@/lib/business-facts';

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre noi" },
  { to: "/produse", label: "Produse" },
  { to: "/etichete-cluj", label: "Etichete Cluj" },
  { to: "/tipografie-cluj", label: "Tipografie" },
  { to: "/tricouri-personalizate-cluj", label: "Tricouri personalizate" },
  { to: "/galerie", label: "Galerie" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Etichett Prod — Acasă">
          <img src="/images/logo.webp" alt="Etichett Prod - producător etichete textile Cluj" width="640" height="76" className="h-8 w-auto md:h-9" />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigație principală">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="ml-auto mr-2 rounded-full lg:ml-0"><Link to="/cere-oferta" onClick={()=>setOpen(false)}>Cere ofertă</Link></Button>
        <Button variant="ghost" size="icon"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Deschide meniul"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Navigație mobilă">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {i.label}
              </Link>
            ))}
            <a href={BUSINESS.phoneHref} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Sună acum: {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
