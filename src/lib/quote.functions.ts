import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { quoteSchema } from "./quote-schema";
import { BUSINESS, TYPE_NAMES } from "./business-facts";

export const prepareLogoUpload = createServerFn({ method: "POST" })
  .inputValidator((value) => z.object({ extension: z.enum(["pdf","ai","svg","png"]), size: z.number().int().positive().max(10 * 1024 * 1024) }).parse(value))
  .handler(async ({ data }) => {
    const path = `${crypto.randomUUID()}/logo.${data.extension}`;
    return { path };
  });
export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((value) => quoteSchema.parse(value))
  .handler(async ({ data }) => {
    const { publicContentClient } = await import("./blog-data.server");
    const db = publicContentClient();
    const { name, company, phone, email, logoPath, id, consent: _consent, website: _website, ...configuration } = data;
    const { error } = await db.from("quote_requests").insert({ id, name, company, phone, email, logo_path: logoPath, configuration, notification_status: "email_not_configured" });
    if (error && error.code !== '23505') throw new Error("Cererea nu a putut fi salvată. Încearcă din nou.");
    if (!error) {
      const message = `Cerere ofertă ${id}\nFirmă: ${company}\nTip: ${TYPE_NAMES[data.type]}\nDimensiune: ${data.width} × ${data.height} mm\nCantitate: ${data.quantity}\nCulori: ${data.colors}\nFinisaj: ${data.finish}\nAplicare: ${data.application}\nTermen dorit: ${data.deadline || 'standard'}\n${BUSINESS.production}\n${data.labelData ? `Etichetă compoziție: ${data.labelData}\n` : ''}Logo: ${logoPath ? 'disponibil în cererea de ofertă' : 'fără logo'}`;
      const { error: contactError } = await db.from('contact_messages').insert({ name, email, phone, message, page: '/cere-oferta' });
      if (contactError) console.error('Quote admin message mirror failed', contactError.code);
    }
    return { ok: true, reference: id.slice(0,8) };
  });