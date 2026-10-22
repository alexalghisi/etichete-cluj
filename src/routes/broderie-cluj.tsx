import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/ServicePage';
import { RouteError, RouteNotFound } from '@/components/RouteBoundary';
import { getSeoOverride } from '@/lib/seo-overrides.functions';
import { applySeo } from '@/lib/seo-head';
import { SERVICE_PAGES } from '@/lib/service-pages-content';
const page = SERVICE_PAGES['broderie-cluj'];
const url = 'https://etichetetextile.ro/broderie-cluj';
export const Route = createFileRoute('/broderie-cluj')({
  loader: () => getSeoOverride({ data: { path: '/broderie-cluj' } }),
  errorComponent: RouteError, notFoundComponent: RouteNotFound,
  head: ({ loaderData }) => applySeo({
    meta: [{ title: page.title }, { name: 'description', content: page.description }, { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description }, { property: 'og:url', content: url }, { property: 'og:image', content: `https://etichetetextile.ro${page.image}` }],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: page.h1, url, provider: { '@id': 'https://etichetetextile.ro/#business' }, areaServed: ['Cluj-Napoca', 'România'] }) }],
  }, loaderData),
  component: () => <ServicePage slug="broderie-cluj" />,
});
