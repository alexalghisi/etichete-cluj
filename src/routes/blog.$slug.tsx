import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { getSeoOverride } from "@/lib/seo-overrides.functions";
import { applySeo } from "@/lib/seo-head";
import { brandTitle } from "@/lib/seo-policy";
import { relevantProducts, normalizeArticleLinks } from "@/lib/product-links";
import { RouteError, RouteNotFound } from "@/components/RouteBoundary";
import { getBlogPost } from "@/lib/blog.functions";
import { AdNativeBanner } from "@/components/AdNativeBanner";

const SITE = "https://etichetetextile.ro";

export const Route = createFileRoute("/blog/$slug")({
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  loader: async ({ params }) => {
    const { post, related } = await getBlogPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return { post, related, ...(await getSeoOverride({ data: { path: `/blog/${post.slug}` } })) };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Articol indisponibil | Etichett Prod" }, { name: "robots", content: "noindex, follow" }] };
    const url = `${SITE}/blog/${post.slug}`;
    return applySeo({
      meta: [
        { title: `${brandTitle(post.title)} | Etichett Prod` },
        { name: "description", content: post.meta_description },
        ...(post.keyword ? [{ name: "keywords", content: `${post.keyword}, etichete, etichete textile, etichete cluj` }] : []),
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.meta_description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.meta_description,
            datePublished: post.published_at,
            dateModified: post.content_updated_at ?? post.published_at,
            image: (() => { const image = post.content.match(/<img[^>]+src=["'](https:\/\/[^"']+)["']/i)?.[1]; return image; })(),
            inLanguage: "ro",
            author: { "@type": "Organization", name: "Etichett Prod", url: SITE },
            publisher: { "@type": "Organization", name: "Etichett Prod", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png` } },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }) },
      ],
    }, loaderData);
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, related } = Route.useLoaderData();
  const products = relevantProducts(`${post.keyword ?? ""} ${post.title} ${post.content}`);
  return (
    <PageLayout>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <nav className="text-sm text-muted-foreground" aria-label="breadcrumb">
          <Link to="/" className="hover:text-primary">Acasă</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>
        <time className="mt-6 block text-xs font-medium uppercase tracking-wide text-muted-foreground" dateTime={post.published_at}>
          {new Date(post.published_at).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
        </time>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div
          className="prose prose-neutral mt-8 max-w-none dark:prose-invert [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: normalizeArticleLinks(post.content) }}
        />
        <p className="mt-6 text-muted-foreground">Pentru această aplicație, descoperă {products.map((prod, i) => <span key={prod.to}>{i > 0 && (i === products.length - 1 ? " și " : ", ")}<Link to={prod.to} className="font-semibold text-primary hover:underline">{prod.label}</Link></span>)}. Echipa Etichett Prod te ajută să alegi materialul și personalizarea potrivite.</p>
        {related.length > 0 && <section className="mt-12"><h2 className="text-2xl font-bold">Articole similare</h2><ul className="mt-4 space-y-3">{related.map((p) => <li key={p.slug}><Link to="/blog/$slug" params={{ slug: p.slug }} className="font-semibold text-primary hover:underline">{p.title}</Link></li>)}</ul></section>}
        <aside className="mt-12 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Ai nevoie de etichete pentru produsele tale?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Producem etichete textile, țesute, satin, autocolante și de compoziție în Cluj-Napoca, din 1993. Consultanță gratuită.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Cere ofertă
            </Link>
            <Link to="/produse" className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent">
              Vezi produsele
            </Link>
          </div>
        </aside>
        <AdNativeBanner />
      </article>
    </PageLayout>
  );
}
