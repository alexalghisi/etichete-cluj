- Page SEO text (title, description, H1, intro, FAQ, related links) can be overridden at runtime from the `seo_overrides` table via each route's loader + `applySeo` in head and `PageLayout`; new content routes must add the same loader/head wrapper so the daily SEO job can optimize them without a code change.
- The daily SEO job (`src/lib/seo-engine.server.ts`) runs from pg_cron through `/api/public/hooks/seo-daily`, authenticated by the token in `seo_settings`; it only edits DB overrides, logs every change in `seo_changes`, and anything needing code is stored as a suggestion — keeps automation safe and reversible.

- Blog posts live in the `blog_posts` DB table (not in code); routes /blog and /blog/$slug render them, sitemap.xml lists them dynamically, and the daily SEO job (`generateDailyBlogPost` in src/lib/seo-engine.server.ts) auto-publishes one article per day — keeps content automation code-free and reversible.
- The blog parent is Outlet-only; listing metadata belongs to blog.index and article metadata to blog.$slug so SSR and canonicals never inherit listing content.
- PageLayout emits the sole FAQPage from visible static and database questions; FaqSection and applySeo must not emit independent FAQ schemas.
- Explicit editorial titles and homepage H1 are protected by seo-policy from existing overrides and daily automation; other SEO fields remain editable.
- Public blog and sitemap reads use paginated publicContentClient queries and surface errors, never privileged reads or silent partial XML.
- Sitemap lastmod uses recorded per-page significant edits and blog content_updated_at (tracked only on substantive edits), never the current build/generation time.
- Business-facts is the authoritative source for commercial values; render-time FAQ and CMS normalization and daily SEO prompts must honor it to prevent conflicting claims.
- Public quote submissions use validated server functions and private signed logo uploads; only admins can read quotes/files, and quote summaries also appear in the existing contact inbox.
- Composition generator shares CareSymbol and typed fibre translations; exports must preserve physical SVG units and pass structured label data into the quote wizard.

- QuoteAdmin uses admin-scoped browser reads and private blob downloads; original logo files are downloaded, never rendered as uploaded HTML or SVG.
