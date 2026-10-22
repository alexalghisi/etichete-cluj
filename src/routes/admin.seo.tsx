import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { runSeoNow } from "@/lib/seo-admin.functions";
import type { Session } from "@supabase/supabase-js";
import { QuoteAdmin } from '@/components/QuoteAdmin';

export const Route = createFileRoute("/admin/seo")({
  component: AdminSeo,
  head: () => ({
    meta: [
      { title: "Panou SEO automat — Etichett Prod" },
      { name: "description", content: "Panou intern de monitorizare SEO." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Panou SEO automat — Etichett Prod" },
      { property: "og:description", content: "Panou intern de monitorizare SEO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const db = supabase as unknown as { from: (t: string) => any };

function AdminSeo() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);
  if (!ready) return null;
  return <div className="min-h-screen bg-background p-4 md:p-8">{session ? <Dashboard /> : <Login />}</div>;
}

function Login() {
  const [email, setEmail] = useState(""); const [pw, setPw] = useState(""); const [msg, setMsg] = useState("");
  const go = async (signup: boolean) => {
    setMsg("");
    const { error } = signup
      ? await supabase.auth.signUp({ email, password: pw, options: { emailRedirectTo: `${window.location.origin}/admin/seo` } })
      : await supabase.auth.signInWithPassword({ email, password: pw });
    setMsg(error ? error.message : signup ? "Cont creat. Confirmă emailul, apoi autentifică-te." : "");
  };
  return (
    <div className="mx-auto mt-20 max-w-sm space-y-3 rounded-2xl border border-border bg-card p-6">
      <h1 className="text-xl font-bold">Panou SEO — autentificare</h1>
      <input className="w-full rounded-lg border border-input bg-background px-3 py-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full rounded-lg border border-input bg-background px-3 py-2" type="password" placeholder="Parolă" value={pw} onChange={(e) => setPw(e.target.value)} />
      <div className="flex gap-2">
        <button onClick={() => go(false)} className="flex-1 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground">Intră</button>
        <button onClick={() => go(true)} className="flex-1 rounded-lg border border-border px-4 py-2">Creează cont</button>
      </div>
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
    </div>
  );
}

function Dashboard() {
  const [d, setD] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const [runMsg, setRunMsg] = useState("");
  const run = useServerFn(runSeoNow);
  const load = useCallback(async () => {
    const [metrics, changes, kws, comp, sugg, runs] = await Promise.all([
      db.from("seo_daily_metrics").select("*").eq("query", "").order("day", { ascending: false }).limit(200),
      db.from("seo_changes").select("*").order("created_at", { ascending: false }).limit(100),
      db.from("seo_keywords").select("*").order("volume", { ascending: false, nullsFirst: false }).limit(50),
      db.from("seo_competitors").select("*").order("day", { ascending: false }).order("position").limit(60),
      db.from("seo_suggestions").select("*").order("created_at", { ascending: false }).limit(30),
      db.from("seo_job_runs").select("*").order("started_at", { ascending: false }).limit(10),
    ]);
    if (metrics.error) { setD({ denied: true }); return; }
    setD({ metrics: metrics.data, changes: changes.data, kws: kws.data, comp: comp.data, sugg: sugg.data, runs: runs.data });
  }, []);
  useEffect(() => { load(); }, [load]);

  const undo = async (c: any) => {
    const restored = c.old_value ?? ((c.field === "faqs" || c.field === "links") ? [] : null);
    const { error } = await db.from("seo_overrides").update({ [c.field]: restored, updated_at: new Date().toISOString() }).eq("path", c.path);
    if (error) { alert(`Anularea a eșuat: ${error.message}`); return; }
    await db.from("seo_changes").update({ status: "reverted" }).eq("id", c.id);
    load();
  };
  const runNow = async () => {
    setBusy(true); setRunMsg("Rulează… (poate dura câteva minute)");
    try { const r = await run(); setRunMsg(r.ok ? `Gata: ${r.log?.join(" · ")}` : `Oprit: ${r.error ?? r.skipped}`); }
    catch (e) { setRunMsg((e as Error).message); }
    setBusy(false); load();
  };

  if (!d) return <p>Se încarcă…</p>;
  if (d.denied) return (
    <div className="mx-auto mt-20 max-w-md text-center">
      <p>Contul tău nu are încă acces de administrator.</p>
      <button className="mt-4 underline" onClick={() => supabase.auth.signOut()}>Ieșire</button>
    </div>
  );
  const latestDay = d.metrics[0]?.day;
  const latest = d.metrics.filter((m: any) => m.day === latestDay);
  const tot = latest.reduce((a: any, m: any) => ({ c: a.c + m.clicks, i: a.i + m.impressions }), { c: 0, i: 0 });

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">SEO automat — Etichett Prod</h1>
        <div className="flex gap-2">
          <button disabled={busy} onClick={runNow} className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground disabled:opacity-50">Rulează acum</button>
          <button onClick={() => supabase.auth.signOut()} className="rounded-lg border border-border px-4 py-2">Ieșire</button>
        </div>
      </div>
      {runMsg && <p className="rounded-lg bg-muted p-3 text-sm">{runMsg}</p>}

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Click-uri (28 zile)" value={tot.c} />
        <Stat label="Afișări (28 zile)" value={tot.i} />
        <Stat label="CTR mediu" value={tot.i ? `${((tot.c / tot.i) * 100).toFixed(1)}%` : "-"} />
      </div>

      <Card title="Ultimele rulări">
        {d.runs.map((r: any) => (
          <div key={r.id} className="border-b border-border py-2 text-sm">
            <b>{new Date(r.started_at).toLocaleString("ro-RO")}</b> — {r.status} {r.error && <span className="text-destructive">({r.error.slice(0, 160)})</span>}
            {r.summary && <pre className="mt-1 whitespace-pre-wrap text-xs text-muted-foreground">{r.summary}</pre>}
          </div>
        ))}
      </Card>

      <Card title="Modificări aplicate automat">
        {d.changes.length === 0 && <p className="text-sm text-muted-foreground">Încă nicio modificare.</p>}
        {d.changes.map((c: any) => (
          <div key={c.id} className="border-b border-border py-3 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span><b>{c.path}</b> · {c.field} · {new Date(c.created_at).toLocaleDateString("ro-RO")} · <i>{c.status}</i></span>
              {c.status === "applied" && <button onClick={() => undo(c)} className="rounded border border-border px-2 py-1 text-xs">Anulează</button>}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Înainte: {JSON.stringify(c.old_value)?.slice(0, 200) ?? "—"}</p>
            <p className="text-xs">După: {JSON.stringify(c.new_value).slice(0, 300)}</p>
            {c.reason && <p className="mt-1 text-xs text-muted-foreground">Motiv: {c.reason}</p>}
          </div>
        ))}
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Pagini (ultimele date Search Console)">
          {latest.sort((a: any, b: any) => b.impressions - a.impressions).map((m: any) => (
            <div key={m.page} className="flex justify-between border-b border-border py-1 text-xs">
              <span>{m.page}</span><span>{m.clicks} click · {m.impressions} afiș · poz {Number(m.position).toFixed(1)}</span>
            </div>
          ))}
        </Card>
        <Card title="Keyword-uri (Semrush, România)">
          {d.kws.map((k: any) => (
            <div key={k.keyword} className="flex justify-between border-b border-border py-1 text-xs">
              <span>{k.keyword}</span><span>poz {k.our_position ?? "-"} · vol {k.volume ?? "-"}</span>
            </div>
          ))}
        </Card>
        <Card title="Concurenți TOP 10">
          {d.comp.map((c: any) => (
            <div key={c.id} className="flex justify-between border-b border-border py-1 text-xs">
              <span>{c.keyword}</span><span>#{c.position} {c.domain}</span>
            </div>
          ))}
        </Card>
        <Card title="Propuneri pentru intervenție manuală">
          {d.sugg.map((s: any) => (
            <div key={s.id} className="border-b border-border py-2 text-xs">
              <b>[{s.kind}] {s.title}</b><p className="text-muted-foreground">{s.details}</p>
            </div>
          ))}
        </Card>
      </div>
      <BlogAdmin />
      <MessagesAdmin />
      <QuoteAdmin />
    </div>
  );
}

function MessagesAdmin() {
  const [rows, setRows] = useState<any[]>([]);
  const load = useCallback(async () => {
    const { data } = await db.from("contact_messages").select("*").order("created_at", { ascending: false }).limit(100);
    setRows(data ?? []);
  }, []);
  useEffect(() => { load(); }, [load]);
  const toggle = async (m: any) => { await db.from("contact_messages").update({ handled: !m.handled }).eq("id", m.id); load(); };
  return (
    <Card title={`Mesaje din formularul de contact (${rows.length})`}>
      {rows.length === 0 && <p className="text-sm text-muted-foreground">Niciun mesaj încă.</p>}
      {rows.map((m) => (
        <div key={m.id} className={`border-b border-border py-3 text-sm ${m.handled ? "opacity-60" : ""}`}>
          <div className="flex flex-wrap justify-between gap-2">
            <span><b>{m.name}</b> · <a className="underline" href={`mailto:${m.email}`}>{m.email}</a>{m.phone && <> · <a className="underline" href={`tel:${m.phone}`}>{m.phone}</a></>} · {new Date(m.created_at).toLocaleString("ro-RO")}</span>
            <button onClick={() => toggle(m)} className="rounded border border-border px-2 py-1 text-xs">{m.handled ? "Marchează nou" : "Rezolvat"}</button>
          </div>
          <p className="mt-1 whitespace-pre-wrap text-muted-foreground">{m.message}</p>
        </div>
      ))}
    </Card>
  );
}

function BlogAdmin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const load = useCallback(async () => {
    const { data } = await db.from("blog_posts").select("*").order("published_at", { ascending: false }).limit(200);
    setPosts(data ?? []);
  }, []);
  useEffect(() => { load(); }, [load]);
  const save = async () => {
    const { id, created_at, ...rest } = edit;
    const q = id ? db.from("blog_posts").update(rest).eq("id", id) : db.from("blog_posts").insert(rest);
    const { error } = await q;
    setMsg(error ? `Eroare: ${error.message}` : "Salvat.");
    if (!error) { setEdit(null); load(); }
  };
  const del = async (p: any) => { if (!confirm(`Ștergi „${p.title}”?`)) return; await db.from("blog_posts").delete().eq("id", p.id); load(); };
  const inp = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm";
  const field = (k: string, label: string, area = false, rows = 3) => (
    <label className="block text-sm">{label}
      {area ? <textarea rows={rows} className={inp} value={edit[k] ?? ""} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} />
        : <input className={inp} value={edit[k] ?? ""} onChange={(e) => setEdit({ ...edit, [k]: e.target.value })} />}
    </label>
  );
  return (
    <Card title={`Blog — articole (${posts.length})`}>
      <button onClick={() => { setMsg(""); setEdit({ slug: "", title: "", meta_description: "", excerpt: "", content: "<p></p>", keyword: "", published: true }); }} className="mb-3 rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">Articol nou</button>
      {msg && <p className="mb-2 text-sm text-muted-foreground">{msg}</p>}
      {edit && (
        <div className="mb-4 space-y-3 rounded-xl border border-border p-4">
          {field("title", "Titlu")}
          {field("slug", "Adresă (slug, ex: cum-aleg-etichete)")}
          {field("keyword", "Cuvânt cheie")}
          {field("meta_description", "Descriere Google (max 160)", true, 2)}
          {field("excerpt", "Rezumat", true, 2)}
          {field("content", "Conținut (HTML: <h2>, <p>)", true, 14)}
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={!!edit.published} onChange={(e) => setEdit({ ...edit, published: e.target.checked })} /> Publicat</label>
          <div className="flex gap-2">
            <button onClick={save} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Salvează</button>
            <button onClick={() => setEdit(null)} className="rounded-lg border border-border px-4 py-2 text-sm">Renunță</button>
          </div>
        </div>
      )}
      {posts.map((p) => (
        <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-2 text-sm">
          <span><b>{p.title}</b> · {new Date(p.published_at).toLocaleDateString("ro-RO")} · {p.published ? "publicat" : <i>ascuns</i>}</span>
          <span className="flex gap-2">
            <a href={`/blog/${p.slug}`} target="_blank" rel="noopener" className="rounded border border-border px-2 py-1 text-xs">Vezi</a>
            <button onClick={() => { setMsg(""); setEdit({ ...p }); }} className="rounded border border-border px-2 py-1 text-xs">Editează</button>
            <button onClick={() => del(p)} className="rounded border border-border px-2 py-1 text-xs text-destructive">Șterge</button>
          </span>
        </div>
      ))}
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return <div className="rounded-2xl border border-border bg-card p-5"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 text-3xl font-bold">{value}</p></div>;
}
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-border bg-card p-5"><h2 className="mb-3 font-bold">{title}</h2><div className="max-h-[480px] overflow-auto">{children}</div></section>;
}
