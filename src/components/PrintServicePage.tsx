import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PageLayout, PageHero } from "./PageLayout";
import { FaqSection } from "./FaqSection";
import { BUSINESS, factualFaq } from "@/lib/business-facts";
import { PRINT_SERVICES, PRINT_SERVICE_BY_SLUG } from "@/lib/print-services-content";

export function PrintServicePage({ slug }: { slug: string }) {
  const p = PRINT_SERVICE_BY_SLUG[slug];
  const related = PRINT_SERVICES.filter((s) => s.slug !== slug);
  return (
    <PageLayout>
      <PageHero eyebrow={p.eyebrow} title={p.h1} subtitle={p.subtitle} />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Acasă</Link> <span className="mx-2">/</span>
          <Link to="/tipografie-cluj" className="hover:text-primary">Tipografie și etichete</Link> <span className="mx-2">/</span>
          <span className="text-foreground">{p.eyebrow.replace("Nou · ", "")}</span>
        </nav>
        <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
          <article className="space-y-8">
            {p.sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-bold">Pentru cine lucrăm</h2>
              <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {p.uses.map((u) => (
                  <li key={u} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {u}</li>
                ))}
              </ul>
            </section>
          </article>
          <aside className="space-y-6">
            <img src={p.image} alt={p.h1} width="1000" height="1000" loading="eager" className="aspect-square w-full rounded-2xl border border-border object-cover shadow-elegant" />
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold">Ce putem personaliza</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.options.map((o) => (
                  <li key={o} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {o}</li>
                ))}
              </ul>
              <dl className="mt-5 grid gap-2 border-t border-border pt-4 text-sm">
                <div><dt className="inline font-semibold">Preț: </dt><dd className="inline text-muted-foreground">{BUSINESS.price}, ofertă în 24h</dd></div>
                <div><dt className="inline font-semibold">Termen: </dt><dd className="inline text-muted-foreground">{BUSINESS.production}. {BUSINESS.urgent}.</dd></div>
                <div><dt className="inline font-semibold">Atelier: </dt><dd className="inline text-muted-foreground">{BUSINESS.address}, din {BUSINESS.founded}</dd></div>
              </dl>
              <Link to="/cere-oferta" search={{ tip: p.type }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Cere ofertă gratuită <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={BUSINESS.phoneHref} className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
        <h2 className="text-2xl font-bold">Alte produse personalizate</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {related.map((r) => (
            <a key={r.slug} href={`/${r.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">{r.eyebrow.replace("Nou · ", "")}</a>
          ))}
          <Link to="/etichete-autocolante" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Etichete autocolante</Link>
          <Link to="/etichete-textile" className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">Etichete textile</Link>
        </div>
      </section>
      <FaqSection pageUrl={`https://etichetetextile.ro/${slug}`} items={p.faq.map((f) => ({ q: f.q, a: factualFaq(f.q, f.a, `/${slug}`) }))} />
    </PageLayout>
  );
}
