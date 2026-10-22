import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getBlogPosts } from "@/lib/blog.functions";

export const Route = createFileRoute("/blog/")({
  loader: async () => ({ ...(await getBlogPosts()), ...(await getSeoOverride({ data: { path: "/blog" } })) }),
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  head: ({ loaderData }) => applySeo({
    meta: [
      { title: "Blog Etichete Textile — Sfaturi, Ghiduri și Noutăți | Etichett Prod Cluj" },
      { name: "description", content: "Ghiduri despre etichete textile, țesute, satin și compoziție, scrise pentru branduri și producători. Descoperă sfaturile. Cere ofertă gratuită în 24h." },
      { name: "keywords", content: "blog etichete, etichete textile, etichete cluj, ghid etichete haine, simboluri spalare" },
      { property: "og:title", content: "Blog Etichete Textile — Sfaturi și Ghiduri | Etichett Prod" },
      { property: "og:description", content: "Articole practice despre etichete textile, țesute și personalizate, scrise de producătorul clujean Etichett Prod." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://etichetetextile.ro/blog" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://etichetetextile.ro/blog" }],
  }, loaderData),
  component: BlogPage,
});

function BlogPage() {
  const { posts } = Route.useLoaderData();
  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog"
        title="Ghiduri și sfaturi despre etichete textile"
        subtitle="Articole practice scrise de echipa Etichett Prod — producător de etichete în Cluj-Napoca din 1993."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Articolele sunt în pregătire. Revino în curând!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <article key={p.slug} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <time className="text-xs font-medium uppercase tracking-wide text-muted-foreground" dateTime={p.published_at}>
                  {new Date(p.published_at).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <h2 className="mt-2 text-xl font-bold leading-snug">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 text-sm font-semibold text-primary hover:underline">
                  Citește articolul →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6"><Link to="/generator-eticheta-compozitie" className="font-semibold text-primary underline">Generator gratuit de etichete de compoziție și întreținere</Link></div>
    </PageLayout>
  );
}
