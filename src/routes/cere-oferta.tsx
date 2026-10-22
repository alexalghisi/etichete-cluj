import { createFileRoute } from '@tanstack/react-router';
import { ProductGuide } from "@/components/ProductGuide";
import { PageLayout, PageHero } from '@/components/PageLayout';
import { QuoteWizard } from '@/components/QuoteWizard';
import { RouteError, RouteNotFound } from '@/components/RouteBoundary';
import { getSeoOverride } from '@/lib/seo-overrides.functions';
import { applySeo } from '@/lib/seo-head';
import { LABEL_TYPES, type LabelType } from '@/lib/business-facts';
export const Route=createFileRoute('/cere-oferta')({
  validateSearch: (s:Record<string,unknown>):{tip?:LabelType;eticheta?:string}=>({tip:LABEL_TYPES.includes(s.tip as LabelType)?s.tip as LabelType:undefined,eticheta:typeof s.eticheta==='string'?s.eticheta.slice(0,15000):undefined}),
  loader:()=>getSeoOverride({data:{path:'/cere-oferta'}}), errorComponent:RouteError,notFoundComponent:RouteNotFound,
  head:({loaderData})=>applySeo({meta:[{title:'Cere ofertă etichete în 60 de secunde | Etichett Prod'},{name:'description',content:'Configurează etichete cu logo: tip, dimensiuni, cantitate și finisaj. Trimite cererea către atelierul Etichett Prod din Cluj. Cere ofertă gratuită în 24h.'},{property:'og:title',content:'Cere ofertă etichete | Etichett Prod'},{property:'og:description',content:'Configurează etichetele și trimite logoul pentru o ofertă personalizată.'},{property:'og:url',content:'https://etichetetextile.ro/cere-oferta'}],links:[{rel:'canonical',href:'https://etichetetextile.ro/cere-oferta'}]},loaderData),
  component:QuotePage,
});
function QuotePage(){const s=Route.useSearch();return <PageLayout><PageHero title="Cere ofertă etichete în 60 de secunde" subtitle="Alege materialul, dimensiunile și personalizarea. Preț la cerere, simulare grafică gratuită."/><section className="mx-auto max-w-5xl px-4 md:px-6"><QuoteWizard initialType={s.tip} initialLabel={s.eticheta}/></section><ProductGuide slug="oferta" />
      </PageLayout>;}
