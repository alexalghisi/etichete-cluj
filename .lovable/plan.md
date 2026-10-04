# Sistem SEO automat zilnic — Etichett Prod

## Ce primești
- Un job zilnic (o dată pe zi, noaptea) care: citește datele din Google Search Console și Semrush, analizează cu AI și **aplică automat** îmbunătățiri SEO pe site.
- Un panou admin protejat (`/admin/seo`) unde vezi: evoluția zilnică (clicks, afișări, CTR, poziție), keyword-urile urmărite, competitorii din TOP 10, jurnalul cu fiecare modificare făcută (înainte / după, motiv) și un buton **Anulează** pentru orice schimbare.
- Login doar pentru tine (cont admin).

## Ce modifică automat (fără publicare)
Pe toate paginile existente, din baza de date, peste textele actuale:
- titlu și meta descriere
- H1 și paragraful introductiv
- întrebări FAQ suplimentare (+ schema FAQ)
- texte ALT la imagini din galerii
- linkuri interne „Vezi și” între servicii

Reguli de siguranță: maxim câteva pagini modificate pe zi, o pagină nu e retușată mai des de o dată la 14 zile (ca Google să apuce să măsoare efectul), dacă o pagină scade după o modificare se revine automat la varianta anterioară.

## Ce NU poate face singur
- Pagini noi complet noi, modificări de design/cod, robots.txt, Core Web Vitals: sistemul le **propune** în panou; le implementez eu când îmi ceri.

## Detalii tehnice
- Tabele: `seo_overrides` (path, title, description, h1, intro, faqs, alts, links, active), `seo_changes` (jurnal + valori vechi/noi + metrici înainte/după), `seo_daily_metrics`, `seo_keywords`, `seo_competitors`, `seo_job_runs` (lock + status/pauză), `user_roles` + `has_role`.
- Fiecare route `head()` și componentă citesc override-ul prin loader (server fn public, cu fallback la textele actuale din cod). Sitemap rămâne static.
- Endpoint `/api/public/hooks/seo-daily` (cron zilnic, secret în header): GSC searchAnalytics (28 zile, pe pagini/query-uri) → Semrush (poziții + competitori, baza `ro`) → AI Gateway (`openai/gpt-6-astra`, output JSON validat cu zod) → scriere override + jurnal. Batch limitat, lock single-flight, pauză la 402/403/429.
- Proprietatea GSC selectată din `/sites` la rulare.
