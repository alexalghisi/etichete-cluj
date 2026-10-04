import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { getBlogPost } from "@/lib/blog.functions";

const SITE = "https://etichetetextile.ro";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { post } = await getBlogPost({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const url = `${SITE}/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Etichett Prod` },
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
            "@type": "Article",
            headline: post.title,
            description: post.meta_description,
            datePublished: post.published_at,
            inLanguage: "ro",
            author: { "@type": "Organization", name: "Etichett Prod", url: SITE },
            publisher: { "@type": "Organization", name: "Etichett Prod", url: SITE },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
      </article>
    </PageLayout>
  );
}
