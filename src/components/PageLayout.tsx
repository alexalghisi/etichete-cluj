import { Children, isValidElement, type ReactNode } from "react";
import { FaqSection } from "./FaqSection";
import { canonicalPath, HOME_H1, mergeFaqs } from "@/lib/seo-policy";
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

export function useSeoOverrideForPage() { return useSeoOverride(); }

function SeoBoost({ staticFaqs }: { staticFaqs: { q: string; a: string }[] }) {
  const original = useSeoOverride();
  const seo = original ? { ...original, faqs: mergeFaqs(staticFaqs, original.faqs ?? []).slice(staticFaqs.length) } : null;
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
              <Link to={canonicalPath(l.to)} className="font-semibold text-primary hover:underline">{l.label}</Link>
            </span>
          ))}
        </nav>
      )}
    </section>
  );
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return Children.toArray(node).map((child) => typeof child === "object" ? textOf(child) : String(child)).join("");
}
function collectFaqs(node: ReactNode): { q: string; a: string }[] {
  const found: { q: string; a: string }[] = [];
  Children.forEach(node, (child) => {
    if (!isValidElement<{ children?: ReactNode; items?: { q: string; a: string }[] }>(child)) return;
    if (child.type === FaqSection) { found.push(...(child.props.items ?? [])); return; }
    if (child.type === "details" || child.type === "div") {
      const parts = Children.toArray(child.props.children).filter(isValidElement<{ children?: ReactNode }>);
      const question = parts.find((p) => p.type === "summary" || p.type === "dt");
      const answer = parts.find((p) => p.type === "p" || p.type === "dd");
      if (question && answer) found.push({ q: textOf(question.props.children).replace(/\s*\+$/, "").trim(), a: textOf(answer.props.children).trim() });
    }
    found.push(...collectFaqs(child.props.children));
  });
  return mergeFaqs(found);
}
export function PageLayout({ children }: { children: React.ReactNode }) {
  const seo = useSeoOverride();
  const staticFaqs = collectFaqs(children);
  const faqs = mergeFaqs(staticFaqs, seo?.faqs ?? []);
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {children}
        <SeoBoost staticFaqs={staticFaqs} />
        {faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }).replace(/</g, "\\u003c") }} />}
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
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{seo?.path === "/" ? HOME_H1 : seo?.h1 || title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}
