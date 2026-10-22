import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Send } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";
import { trackConversion } from '@/lib/conversions';
import { Button } from './ui/button';

declare global { interface Window { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] } }

const input = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm";

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [f, setF] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setErr(""); setState("sending");
    try {
      await send({ data: f });
      setState("done");
      trackConversion('generate_lead', {form:'contact'});
    } catch (e2) {
      setErr((e2 as Error).message.includes("Mesajul") ? (e2 as Error).message : "Verifică datele introduse (nume, email valid, mesaj).");
      setState("idle");
    }
  };

  if (state === "done") return (
    <div id="multumim" role="status" className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center">
      <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
      <h3 className="mt-3 text-xl font-bold">Mulțumim! Mesajul a fost trimis.</h3>
      <p className="mt-2 text-sm text-muted-foreground">Revenim cu o ofertă în cel mai scurt timp, de obicei în aceeași zi lucrătoare.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">Nume *<input required minLength={2} maxLength={100} className={input} value={f.name} onChange={set("name")} /></label>
        <label className="text-sm">Telefon<input maxLength={30} className={input} value={f.phone} onChange={set("phone")} /></label>
      </div>
      <label className="block text-sm">Email *<input required type="email" maxLength={200} className={input} value={f.email} onChange={set("email")} /></label>
      <label className="block text-sm">Mesaj *<textarea required minLength={5} maxLength={3000} rows={4} className={input} placeholder="Tip etichetă, dimensiuni, cantitate, material…" value={f.message} onChange={set("message")} /></label>
      <input tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={f.website} onChange={set("website")} />
      {err && <p className="text-sm text-destructive">{err}</p>}
      <Button disabled={state === "sending"} className="inline-flex h-auto w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50">
        <Send className="h-4 w-4" /> {state === "sending" ? "Se trimite…" : "Trimite mesajul"}
      </Button>
    </form>
  );
}
