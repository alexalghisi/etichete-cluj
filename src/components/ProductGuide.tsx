import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCT_GUIDES } from "@/lib/product-guides";

export function ProductGuide({ slug }: { slug: keyof typeof PRODUCT_GUIDES }) {
  const g = PRODUCT_GUIDES[slug];
  if (!g) return null;
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6" aria-labelledby={`ghid-${slug}`}>
      <h2 id={`ghid-${slug}`} className="text-3xl font-bold">{g.title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{g.intro}</p>
      {g.sections.map((s) => (
        <div key={s.h} className="mt-10">
          <h3 className="text-xl font-bold">{s.h}</h3>
          {s.p?.map((t) => (
            <p key={t.slice(0, 40)} className="mt-3 text-muted-foreground">{t}</p>
          ))}
          {s.list && (
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              {s.list.map((t) => <li key={t.slice(0, 40)}>{t}</li>)}
            </ul>
          )}
          {s.table && (
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{s.table.caption}</caption>
                <thead className="bg-muted">
                  <tr>{s.table.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      {r.map((c, i) => i === 0
                        ? <th key={i} scope="row" className="px-4 py-3 font-medium">{c}</th>
                        : <td key={i} className="px-4 py-3 text-muted-foreground">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
      <nav aria-label="Pagini conexe" className="mt-10 flex flex-wrap gap-3">
        {g.related.map((r) => (
          <Link key={r.to} to={r.to as never} className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
            {r.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        ))}
      </nav>
    </section>
  );
}
