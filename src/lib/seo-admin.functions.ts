import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const runSeoNow = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) throw new Error("Forbidden");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { runDailySeo } = await import("./seo-engine.server");
    const r = await runDailySeo(supabaseAdmin as never);
    return JSON.parse(JSON.stringify(r)) as { ok?: boolean; error?: string; log?: string[]; skipped?: string };
  });
