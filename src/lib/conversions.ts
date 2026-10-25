export function hasAnalyticsConsent(): boolean {
  return typeof window !== "undefined";
}
export function trackConversion(event: "click_phone" | "click_whatsapp" | "generate_lead", details: Record<string, string> = {}) {
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", event, details);
  // GA4 key event imported into Google Ads as the "Contact Us" conversion
  window.gtag?.("event", "ads_conversion_Contact_Us_1", { method: event, ...details });
}
