export function hasAnalyticsConsent(): boolean {
  try { return typeof window !== "undefined" && localStorage.getItem("etichett-cookie-consent") === "accepted"; } catch { return false; }
}
export function trackConversion(event: "click_phone" | "click_whatsapp" | "generate_lead", details: Record<string, string> = {}) {
  if (hasAnalyticsConsent()) window.gtag?.("event", event, details);
}