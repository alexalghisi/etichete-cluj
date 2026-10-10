import { useEffect, useState } from "react";

const STORAGE_KEY = "etichett-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent"));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Notificare cookie-uri GDPR"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm leading-relaxed text-foreground">
            <p className="font-semibold">Acest site folosește cookie-uri</p>
            <p className="mt-1 text-muted-foreground">
              Utilizăm cookie-uri pentru a îmbunătăți experiența ta de navigare și pentru a analiza traficul, conform GDPR. Poți accepta sau refuza utilizarea lor.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              Refuz
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
