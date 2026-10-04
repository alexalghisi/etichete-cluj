import { z } from "zod";

const SITE = "https://etichetetextile.ro";
const GSC = "https://connector-gateway.lovable.dev/google_search_console";
const SEMRUSH = "https://connector-gateway.lovable.dev/semrush";
const AI_URL = "https://ai.gateway.lovable.dev/v1/responses";
const MAX_PAGES_PER_DAY = 3;
const COOLDOWN_DAYS = 14;

export const PAGES = [
  "/", "/produse", "/galerie", "/despre-noi", "/contact", "/etichete-textile", "/etichete-personalizate",
  "/etichete-tesute", "/etichete-satin", "/etichete-saten", "/etichete-carton", "/etichete-autoadezive",
  "/etichete-autocolante", "/etichete-termoadezive", "/etichete-haine", "/etichete-haine-copii",
  "/etichete-compozitie", "/etichete-nylon", "/etichete-cluj", "/etichete-cluj-napoca", "/simboluri-etichete-haine",
];
const PRIORITY_KEYWORDS = [
  "etichete", "etichete cluj", "etichete textile", "etichete personalizate", "etichete autoadezive",
  "etichete adezive", "etichete satin", "etichete tesute", "etichete carton", "etichete haine",
];

class PauseError extends Error {}

function keys() {
  const lovable = process.env["LOVABLE_API_KEY"];
  const gsc = process.env["GOOGLE_SEARCH_CONSOLE_API_KEY"];
  const sem = process.env["SEMRUSH_API_KEY"];
  if (!lovable) throw new Error("LOVABLE_API_KEY missing");
  return { lovable, gsc, sem };
}

async function gscFetch(path: string, init?: RequestInit) {
  const k = keys();
  if (!k.gsc) throw new Error("Search Console not connected");
  const r = await fetch(`${GSC}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${k.lovable}`, "X-Connection-Api-Key": k.gsc, "Content-Type": "application/json" },
  });
  if (r.status === 403 || r.status === 429) throw new PauseError(`Search Console ${r.status}: ${await r.text()}`);
  if (!r.ok) throw new Error(`Search Console ${r.status}: ${await r.text()}`);
  return r.json();
}

async function resolveSite(): Promise<string> {
  const { siteEntry = [] } = (await gscFetch("/webmasters/v3/sites")) as { siteEntry?: { siteUrl: string; permissionLevel?: string }[] };
  const ok = siteEntry.filter((e) => e.permissionLevel !== "siteUnverifiedUser");
  const exact = ok.find((e) => e.siteUrl === `${SITE}/`);
  const cover = exact ?? ok.find((e) => e.siteUrl === "sc-domain:etichetetextile.ro") ?? ok.find((e) => SITE.startsWith(e.siteUrl.replace(/\/$/, "")));
  if (!cover) throw new PauseError("No verified Search Console property for etichetetextile.ro");
  return cover.siteUrl;
}

async function semrush(path: string, params: Record<string, string>) {
  const k = keys();
  if (!k.sem) return null;
  const qs = new URLSearchParams(params).toString();
  const r = await fetch(`${SEMRUSH}${path}?${qs}`, { headers: { Authorization: `Bearer ${k.lovable}`, "X-Connection-Api-Key": k.sem } });
  const text = await r.text();
  if (text.includes("LIMIT EXCEEDED")) throw new PauseError("Semrush quota exhausted");
  if (!r.ok) { console.error("semrush", r.status, text); return null; }
  try {
    const j = JSON.parse(text) as { data?: { columnNames: string[]; rows: unknown[][] } };
    const cols = j.data?.columnNames ?? [];
    return (j.data?.rows ?? []).map((row) => Object.fromEntries(cols.map((c, i) => [c, row[i]])) as Record<string, string>);
  } catch { return null; }
}

async function aiJson(prompt: string): Promise<string> {
  const k = keys();
  const r = await fetch(AI_URL, {
    method: "POST",
    headers: { "Lovable-API-Key": k.lovable, Authorization: `Bearer ${k.lovable}`, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch" },
    body: JSON.stringify({
      model: "openai/gpt-6-astra",
      stream: true,
      store: false,
      reasoning: { effort: "medium" },
      input: [{ role: "user", content: prompt }],
    }),
  });
  if (r.status === 402 || r.status === 403 || r.status === 429) throw new PauseError(`AI ${r.status}: ${await r.text()}`);
  if (!r.ok || !r.body) throw new Error(`AI ${r.status}: ${await r.text()}`);
  const reader = r.body.getReader();
  const dec = new TextDecoder();
  let buf = "", out = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split("\n");
    buf = lines.pop() ?? "";
    for (const l of lines) {
      if (!l.startsWith("data:")) continue;
      const d = l.slice(5).trim();
      if (!d || d === "[DONE]") continue;
      try {
        const ev = JSON.parse(d) as { type?: string; delta?: string };
        if (ev.type === "response.output_text.delta" && ev.delta) out += ev.delta;
      } catch { /* ignore */ }
    }
  }
  if (!out.trim()) throw new Error("AI returned no text (possibly refused)");
  return out;
}

async function readPage(path: string) {
  try {
    const html = await (await fetch(`${SITE}${path}`)).text();
    const pick = (re: RegExp) => (html.match(re)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
    return {
      title: pick(/<title[^>]*>([\s\S]*?)<\/title>/i),
      description: pick(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
      h1: pick(/<h1[^>]*>([\s\S]*?)<\/h1>/i),
      text: html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 2500),
    };
  } catch { return { title: "", description: "", h1: "", text: "" }; }
}

const Proposal = z.object({
  title: z.string().min(20).max(65).nullable(),
  description: z.string().min(70).max(160).nullable(),
  h1: z.string().min(10).max(90).nullable(),
  intro: z.string().transform((x) => x.slice(0, 1000)).nullable(),
  faqs: z.array(z.object({ q: z.string().max(160), a: z.string().transform((x) => x.slice(0, 700)) })).transform((x) => x.slice(0, 3)),
  links: z.array(z.object({ to: z.string(), label: z.string().max(80) })).transform((x) => x.slice(0, 3)),
  reason: z.string().transform((x) => x.slice(0, 800)),
  suggestions: z.array(z.object({ kind: z.string(), title: z.string(), details: z.string() })).transform((x) => x.slice(0, 2)),
});

type Sb = { from: (t: string) => any };

export async function runDailySeo(sb: Sb) {
  const { data: settings } = await sb.from("seo_settings").select("paused_reason").eq("id", 1).maybeSingle();
  if (settings?.paused_reason) {
    // one probe per run: try, and clear pause on success
    console.log("SEO job paused, probing:", settings.paused_reason);
  }
  const { data: running } = await sb.from("seo_job_runs").select("id").eq("status", "running")
    .gte("started_at", new Date(Date.now() - 30 * 60_000).toISOString()).limit(1);
  if (running?.length) return { skipped: "already running" };
  const { data: run } = await sb.from("seo_job_runs").insert({}).select("id").single();
  const log: string[] = [];
  try {
    // 1. Search Console metrics
    const siteUrl = await resolveSite();
    const end = new Date(Date.now() - 2 * 86400_000);
    const start = new Date(end.getTime() - 27 * 86400_000);
    const fmt = (d: Date) => d.toISOString().slice(0, 10);
    const enc = encodeURIComponent(siteUrl);
    const byPage = (await gscFetch(`/webmasters/v3/sites/${enc}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: ["page"], rowLimit: 100 }),
    })) as { rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[] };
    const byQuery = (await gscFetch(`/webmasters/v3/sites/${enc}/searchAnalytics/query`, {
      method: "POST", body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: ["page", "query"], rowLimit: 500 }),
    })) as { rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[] };
    const today = fmt(new Date());
    const pageStats = new Map<string, { clicks: number; impressions: number; ctr: number; position: number }>();
    for (const r of byPage.rows ?? []) {
      const p = new URL(r.keys[0]).pathname.replace(/\/$/, "") || "/";
      pageStats.set(p, r);
      await sb.from("seo_daily_metrics").upsert({ day: today, page: p, query: "", clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position }, { onConflict: "day,page,query" });
    }
    const queriesByPage = new Map<string, string[]>();
    for (const r of byQuery.rows ?? []) {
      const p = new URL(r.keys[0]).pathname.replace(/\/$/, "") || "/";
      const arr = queriesByPage.get(p) ?? [];
      if (arr.length < 15) arr.push(`${r.keys[1]} (afișări ${r.impressions}, click ${r.clicks}, poz ${r.position.toFixed(1)})`);
      queriesByPage.set(p, arr);
    }
    log.push(`GSC: ${pageStats.size} pagini`);

    // 2. Semrush: our rankings + competitors for a rotating subset of keywords
    const ours = await semrush("/domains/domain_organic", { domain: "etichetetextile.ro", database: "ro", export_columns: "Ph,Po,Nq,Kd,Ur", display_limit: "100" });
    for (const r of ours ?? []) {
      await sb.from("seo_keywords").upsert({ keyword: r["Keyword"] ?? r["Ph"], our_position: Number(r["Position"] ?? r["Po"]) || null, volume: Number(r["Search Volume"] ?? r["Nq"]) || null, difficulty: Number(r["Keyword Difficulty"] ?? r["Kd"]) || null, target_path: (() => { try { return new URL(r["Url"] ?? r["Ur"]).pathname; } catch { return null; } })(), updated_at: new Date().toISOString() });
    }
    const dayIdx = Math.floor(Date.now() / 86400_000);
    const kwToday = [0, 1, 2].map((i) => PRIORITY_KEYWORDS[(dayIdx * 3 + i) % PRIORITY_KEYWORDS.length]);
    const competitors: string[] = [];
    for (const kw of kwToday) {
      const serp = await semrush("/keywords/phrase_organic", { phrase: kw, database: "ro", export_columns: "Dn,Ur", display_limit: "10" });
      (serp ?? []).forEach(async (r, i) => {
        const domain = r["Domain"] ?? r["Dn"];
        competitors.push(`${kw} #${i + 1}: ${domain}`);
        await sb.from("seo_competitors").upsert({ day: today, keyword: kw, domain, url: r["Url"] ?? r["Ur"], position: i + 1 }, { onConflict: "day,keyword,domain" });
      });
    }
    log.push(`Semrush: ${ours?.length ?? 0} keyword-uri, ${competitors.length} rezultate concurență`);

    // 3. Measure past changes; auto-revert ones that hurt
    const { data: past } = await sb.from("seo_changes").select("*").eq("status", "applied")
      .lte("created_at", new Date(Date.now() - COOLDOWN_DAYS * 86400_000).toISOString()).is("metrics_after", null).limit(20);
    for (const c of past ?? []) {
      const now = pageStats.get(c.path) ?? null;
      const before = c.metrics_before as { clicks: number; position: number } | null;
      await sb.from("seo_changes").update({ metrics_after: now }).eq("id", c.id);
      if (before && now && now.position > before.position + 3 && now.clicks < before.clicks) {
        await sb.from("seo_overrides").update({ [c.field]: c.old_value, updated_at: new Date().toISOString() }).eq("path", c.path);
        await sb.from("seo_changes").update({ status: "auto_reverted" }).eq("id", c.id);
        log.push(`Revenire automată ${c.path} ${c.field}`);
      }
    }

    // 4. Pick pages to improve: high impressions, weak CTR or position 4-20, not in cooldown
    const { data: overrides } = await sb.from("seo_overrides").select("*");
    const ovMap = new Map<string, any>((overrides ?? []).map((o: any) => [o.path, o]));
    const cooldown = Date.now() - COOLDOWN_DAYS * 86400_000;
    const candidates = PAGES.filter((p) => {
      const o = ovMap.get(p);
      return !o?.last_changed_at || new Date(o.last_changed_at).getTime() < cooldown;
    }).map((p) => {
      const s = pageStats.get(p);
      const score = s ? s.impressions * (1 - s.ctr) * (s.position >= 4 && s.position <= 20 ? 2 : 1) : 1;
      return { p, s, score };
    }).sort((a, b) => b.score - a.score).slice(0, MAX_PAGES_PER_DAY);

    let applied = 0;
    for (const { p, s } of candidates) {
      const page = await readPage(p);
      const o = ovMap.get(p);
      const prompt = `Ești expert SEO senior pentru firma Etichett Prod (producător de etichete textile, Cluj-Napoca, din 1993). Site: ${SITE}.
Optimizează pagina ${p} pentru Google România. Scrie în română corectă, cu diacritice, util și factual. NU inventa prețuri, termene, certificări sau date noi; folosește doar informațiile din pagină. Fără keyword stuffing.

Date Search Console 28 zile pentru pagină: ${s ? JSON.stringify(s) : "fără date"}
Interogări reale: ${(queriesByPage.get(p) ?? []).join("; ") || "-"}
Keyword-uri prioritare firmă: ${PRIORITY_KEYWORDS.join(", ")}
Concurenți TOP 10 azi: ${competitors.slice(0, 30).join("; ") || "-"}

Titlu actual: ${page.title}
Descriere actuală: ${page.description}
H1 actual: ${page.h1}
FAQ adăugate anterior: ${JSON.stringify(o?.faqs ?? [])}
Text pagină: ${page.text}

Pagini interne disponibile pentru linkuri: ${PAGES.filter((x) => x !== p).join(", ")}

Returnează DOAR JSON valid (fără markdown) cu cheile:
{"title": string 30-60 caractere sau null dacă actualul e bun, "description": string 120-155 caractere sau null, "h1": string sau null, "intro": paragraf 300-700 caractere care răspunde intenției de căutare sau null, "faqs": [max 3 {q,a} noi, utile, nerepetate], "links": [max 3 {to: cale din listă, label: anchor text natural}], "reason": de ce, pe baza datelor, "suggestions": [max 2 {kind: "pagina_noua"|"tehnic"|"continut", title, details} pentru lucruri ce necesită intervenție manuală]}`;
      let parsed;
      try {
        const raw = await aiJson(prompt);
        parsed = Proposal.parse(JSON.parse(raw.replace(/^```(json)?|```$/g, "").trim()));
      } catch (e) {
        if (e instanceof PauseError) throw e;
        log.push(`${p}: propunere invalidă (${(e as Error).message.slice(0, 80)})`);
        continue;
      }
      const links = parsed.links.filter((l) => PAGES.includes(l.to) && l.to !== p);
      const next: Record<string, unknown> = {};
      if (parsed.title) next.title = parsed.title;
      if (parsed.description) next.description = parsed.description;
      if (parsed.h1) next.h1 = parsed.h1;
      if (parsed.intro) next.intro = parsed.intro;
      if (parsed.faqs.length) next.faqs = [...(o?.faqs ?? []), ...parsed.faqs].slice(-6);
      if (links.length) next.links = links;
      if (!Object.keys(next).length) continue;
      for (const [field, value] of Object.entries(next)) {
        await sb.from("seo_changes").insert({ path: p, field, old_value: o?.[field] ?? null, new_value: value, reason: parsed.reason, metrics_before: s ?? null });
      }
      await sb.from("seo_overrides").upsert({ path: p, ...next, active: true, last_changed_at: new Date().toISOString(), updated_at: new Date().toISOString() });
      for (const sug of parsed.suggestions) await sb.from("seo_suggestions").insert(sug);
      applied++;
      log.push(`${p}: aplicat ${Object.keys(next).join(", ")}`);
    }

    await sb.from("seo_settings").update({ paused_reason: null }).eq("id", 1);
    await sb.from("seo_job_runs").update({ status: "ok", finished_at: new Date().toISOString(), summary: log.join("\n") }).eq("id", run.id);
    return { ok: true, applied, log };
  } catch (e) {
    const msg = (e as Error).message;
    if (e instanceof PauseError) await sb.from("seo_settings").update({ paused_reason: msg }).eq("id", 1);
    await sb.from("seo_job_runs").update({ status: e instanceof PauseError ? "paused" : "error", finished_at: new Date().toISOString(), error: msg, summary: log.join("\n") }).eq("id", run.id);
    return { ok: false, error: msg, log };
  }
}
