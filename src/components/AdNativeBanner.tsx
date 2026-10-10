import { useEffect, useRef, useState } from "react";

const ID = "18f1ccaff910cf1de42c4abd6f3c0a2b";
const SRC = `https://pl31755946.profitableratecpmnetwork.com/${ID}/invoke.js`;

// Native ad block — loads only after the visitor accepts cookies (GDPR).
export function AdNativeBanner() {
  const [ok, setOk] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const check = () => { try { setOk(localStorage.getItem("etichett-cookie-consent") === "accepted"); } catch { /* ignore */ } };
    check();
    window.addEventListener("cookie-consent", check);
    return () => window.removeEventListener("cookie-consent", check);
  }, []);
  useEffect(() => {
    if (!ok || !ref.current || ref.current.querySelector("script")) return;
    const s = document.createElement("script");
    s.async = true; s.setAttribute("data-cfasync", "false"); s.src = SRC;
    ref.current.prepend(s);
  }, [ok]);
  if (!ok) return null;
  return (
    <aside aria-label="Publicitate" className="mt-12 border-t border-border pt-6">
      <p className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">Publicitate</p>
      <div ref={ref}><div id={`container-${ID}`} /></div>
    </aside>
  );
}
