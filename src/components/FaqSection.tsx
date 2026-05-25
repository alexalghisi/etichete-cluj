import { useId } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title?: string;
  items: FaqItem[];
  pageUrl: string;
}

export function FaqSection({ title = "Întrebări frecvente despre etichete", items, pageUrl }: FaqSectionProps) {
  const id = useId();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-6" aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map((it) => (
          <details key={it.q} className="group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
              {it.q}
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
