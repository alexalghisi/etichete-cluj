import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { quoteSchema } from "./quote-schema";
import { BUSINESS, TYPE_NAMES } from "./business-facts";

export const prepareLogoUpload = createServerFn({ method: "POST" })
  .inputValidator((value) => z.object({ extension: z.enum(["pdf","ai","svg","png"]), size: z.number().int().positive().max(10 * 1024 * 1024) }).parse(value))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const path = `${crypto.randomUUID()}/logo.${data.extension}`;
    const { data: signed, error } = await supabaseAdmin.storage.from("quote-logos").createSignedUploadUrl(path);
    if (error || !signed) throw new Error("Încărcarea logoului nu este disponibilă. Încearcă din nou.");
    return { path, token: signed.token };
  });
export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((value) => quoteSchema.parse(value))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { name, company, phone, email, logoPath, id, consent: _consent, website: _website, ...configuration } = data;
    if (logoPath) {
      const [folder, filename] = logoPath.split('/');
      const { data: files, error } = await supabaseAdmin.storage.from('quote-logos').list(folder, { search: filename, limit: 1 });
      if (error || !files?.some((f) => f.name === filename)) throw new Error('Logoul nu a fost încărcat complet. Reîncearcă.');
    }
    const { error } = await supabaseAdmin.from("quote_requests").insert({ id, name, company, phone, email, logo_path: logoPath, configuration, notification_status: "email_not_configured" });
    if (error && error.code !== '23505') throw new Error("Cererea nu a putut fi salvată. Încearcă din nou.");
    if (!error) {
      const message = `Cerere ofertă ${id}\nFirmă: ${company}\nTip: ${TYPE_NAMES[data.type]}\nDimensiune: ${data.width} × ${data.height} mm\nCantitate: ${data.quantity}\nCulori: ${data.colors}\nFinisaj: ${data.finish}\nAplicare: ${data.application}\nTermen dorit: ${data.deadline || 'standard'}\n${BUSINESS.production}\n${data.labelData ? `Etichetă compoziție: ${data.labelData}\n` : ''}Logo: ${logoPath ? 'disponibil în cererea de ofertă' : 'fără logo'}`;
      const { error: contactError } = await supabaseAdmin.from('contact_messages').insert({ name, email, phone, message, page: '/cere-oferta' });
      if (contactError) console.error('Quote admin message mirror failed', contactError.code);
    }
    return { ok: true, reference: id.slice(0,8) };
  });