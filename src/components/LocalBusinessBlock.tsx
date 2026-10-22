import { BUSINESS } from "@/lib/business-facts";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export function LocalBusinessBlock({ keyword }: { keyword: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6" aria-labelledby="local-heading">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <h2 id="local-heading" className="text-2xl font-bold">{keyword} — vino la atelierul nostru</h2>
          <p className="mt-3 text-muted-foreground">
            Producem <strong>{keyword.toLowerCase()}</strong> în atelierul propriu din <strong>Cluj-Napoca</strong>, județul Cluj. Poți ridica personal comanda sau o livrăm prin curier în tot orașul și în toată România.
          </p>
          <address className="mt-6 space-y-3 not-italic text-muted-foreground">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" />S.C. ETICHETT PROD S.R.L.<br />{BUSINESS.address}, România</p>
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><a className="hover:text-primary" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> · <a className="hover:text-primary" href={BUSINESS.landlineHref}>{BUSINESS.landline}</a></p>
            <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" />Luni–Vineri: 08:00–17:00</p>
          </address>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Strada+Uzinei+Electrice+9+Cluj-Napoca" target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            <Navigation className="h-4 w-4" /> Indicații pe Google Maps
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe title={`Hartă ${keyword} — Etichett Prod`} src="https://maps.google.com/maps?q=Strada+Uzinei+Electrice+9+Cluj-Napoca&z=15&output=embed" className="h-72 w-full md:h-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
