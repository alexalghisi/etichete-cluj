import { createFileRoute } from '@tanstack/react-router';
import { NewLabelPage } from '@/components/NewLabelPage';
import { RouteError,RouteNotFound } from '@/components/RouteBoundary';
import { getSeoOverride } from '@/lib/seo-overrides.functions';
import { applySeo } from '@/lib/seo-head';
import { NEW_LABEL_PAGES } from '@/lib/new-label-content';
const page=NEW_LABEL_PAGES['embleme-tesute'];
export const Route=createFileRoute('/embleme-tesute')({loader:()=>getSeoOverride({data:{path:'/embleme-tesute'}}),errorComponent:RouteError,notFoundComponent:RouteNotFound,head:({loaderData})=>applySeo({meta:[{title:page.title},{name:'description',content:`${page.h1}. Producție în Cluj-Napoca din 1993, personalizare și livrare în România. Cere ofertă gratuită în 24h.`},{property:'og:title',content:page.title},{property:'og:description',content:page.h1},{property:'og:url',content:'https://etichetetextile.ro/embleme-tesute'},{property:'og:image',content:`https://etichetetextile.ro${page.image}`}],links:[{rel:'canonical',href:'https://etichetetextile.ro/embleme-tesute'}],scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Service',name:page.h1,serviceType:'Producție etichete personalizate',provider:{'@id':'https://etichetetextile.ro/#business'},areaServed:['România','Cluj-Napoca']})}]},loaderData),component:()=> <NewLabelPage slug="embleme-tesute"/>});
