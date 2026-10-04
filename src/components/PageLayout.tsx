import { Link, useMatches } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { SeoOverride } from "@/lib/seo-overrides.functions";

function useSeoOverride(): SeoOverride | null {
  const matches = useMatches();
  const leaf = matches[matches.length - 1];
  const ld = leaf?.loaderData as { seo?: SeoOverride | null } | undefined;
  return ld?.seo ?? null;
}

function SeoBoost() {
  const seo = useSeoOverride();
  if (!seo || (!seo.intro && !seo.faqs?.length && !seo.links?.length)) return null;
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      {seo.intro && <p className="text-base leading-relaxed text-muted-foreground">{seo.intro}</p>}
      {seo.faqs?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Întrebări utile</h2>
          <div className="mt-4 space-y-3">
            {seo.faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}
      {seo.links?.length > 0 && (
        <nav aria-label="Vezi și" className="mt-8 text-sm">
          <span className="font-semibold">Vezi și: </span>
          {seo.links.map((l, i) => (
            <span key={l.to}>
              {i > 0 && ", "}
              <Link to={l.to} className="font-semibold text-primary hover:underline">{l.label}</Link>
            </span>
          ))}
        </nav>
      )}
    </section>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {children}
        <SeoBoost />
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  const seo = useSeoOverride();
  return (
    <section className="gradient-hero relative overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 35%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{seo?.h1 || title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}
