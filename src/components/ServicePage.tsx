import { Link } from '@tanstack/react-router';
import { webp } from "@/lib/img";
import { PageLayout, PageHero } from './PageLayout';
import { FaqSection } from './FaqSection';
import { Button } from './ui/button';
import { SERVICE_PAGES, SERVICE_LINKS, type ServiceSlug } from '@/lib/service-pages-content';
import { BUSINESS } from '@/lib/business-facts';
export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const p = SERVICE_PAGES[slug];
  return <PageLayout>
    <PageHero title={p.h1} subtitle={`${BUSINESS.name}, ${BUSINESS.city} — din ${BUSINESS.founded}. Personalizare după grafica ta, ${BUSINESS.price.toLowerCase()}.`} />
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6"><div className="grid gap-10 md:grid-cols-[2fr_1fr]">
      <article className="space-y-8">{p.sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-bold">{title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></section>)}</article>
      <aside>
        <img src={webp(p.image)} alt={p.imageAlt} width="800" height="800" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl object-contain" />
        <Button asChild className="mt-6"><Link to="/cere-oferta">Cere ofertă</Link></Button>
        <p className="mt-4 text-sm text-muted-foreground">Telefon: <a href={BUSINESS.phoneHref} className="text-primary underline">{BUSINESS.phone}</a></p>
        <nav aria-label="Servicii înrudite" className="mt-6 space-y-3 text-sm">
          {SERVICE_LINKS.filter(l => l.to !== `/${slug}`).map(l => <Link key={l.to} to={l.to} className="block text-primary underline">{l.label}</Link>)}
          <Link to="/etichete-cluj" className="block text-primary underline">Etichete Cluj</Link>
          <Link to="/etichete-tesute" className="block text-primary underline">Etichete țesute</Link>
          <Link to="/etichete-satin" className="block text-primary underline">Etichete satin imprimate</Link>
          <Link to="/etichete-compozitie" className="block text-primary underline">Etichete de compoziție și întreținere</Link>
        </nav>
      </aside>
    </div></section>
    <FaqSection title="Întrebări frecvente" pageUrl={`https://etichetetextile.ro/${slug}`} items={p.faq.map(f => ({ ...f }))} />
  </PageLayout>;
}
