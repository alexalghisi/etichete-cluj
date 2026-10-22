import { z } from "zod";
import { LABEL_TYPES } from "./business-facts";
export const quoteSchema = z.object({
  id: z.string().uuid(), type: z.enum(LABEL_TYPES), width: z.coerce.number().min(5).max(300), height: z.coerce.number().min(5).max(300),
  quantity: z.coerce.number().int().min(1).max(1000000), colors: z.string().trim().max(300), finish: z.string().trim().max(300), application: z.enum(["cusut", "termo", "adeziv"]),
  deadline: z.string().max(30), name: z.string().trim().min(2).max(100), company: z.string().trim().max(150), phone: z.string().trim().min(7).max(30), email: z.string().trim().email().max(200),
  logoPath: z.string().regex(/^[a-f0-9-]{36}\/(?:logo\.(?:pdf|ai|svg|png))$/).nullable(), labelData: z.string().max(15000).default(""), website: z.string().max(0).default(""), consent: z.literal(true),
});
export type QuoteInput = z.infer<typeof quoteSchema>;