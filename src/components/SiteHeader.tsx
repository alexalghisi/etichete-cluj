import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre noi" },
  { to: "/produse", label: "Produse" },
  { to: "/etichete-cluj", label: "Etichete Cluj" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="ETICHETT PROD — Acasă">
          <img src="/images/logo.png" alt="ETICHETT PROD - producător etichete textile Cluj" className="h-8 w-auto md:h-9" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigație principală">
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
        <a
          href="tel:+40747264832"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> 0747 264 832
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Deschide meniul"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
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
            <a href="tel:+40747264832" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
              <Phone className="h-4 w-4" /> Sună acum: 0747 264 832
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
