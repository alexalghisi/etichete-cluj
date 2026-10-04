import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(5).max(3000),
  website: z.string().max(0).optional().default(""), // honeypot
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((d) => schema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await (supabaseAdmin as any).from("contact_messages").insert({
      name: data.name, email: data.email, phone: data.phone || null, message: data.message, page: "/contact",
    });
    if (error) throw new Error("Mesajul nu a putut fi trimis. Încearcă din nou sau sună-ne.");
    return { ok: true };
  });
