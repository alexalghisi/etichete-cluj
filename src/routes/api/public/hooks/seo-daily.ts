import { createFileRoute } from "@tanstack/react-router";
import { timingSafeEqual } from "crypto";

export const Route = createFileRoute("/api/public/hooks/seo-daily")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = request.headers.get("x-seo-token") ?? "";
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data } = await supabaseAdmin.from("seo_settings" as never).select("cron_token").eq("id", 1).maybeSingle();
        const expected = (data as { cron_token?: string } | null)?.cron_token ?? "";
        if (!token || !expected || token.length !== expected.length || !timingSafeEqual(Buffer.from(token), Buffer.from(expected))) {
          return new Response("Unauthorized", { status: 401 });
        }
        const { runDailySeo } = await import("@/lib/seo-engine.server");
        const result = await runDailySeo(supabaseAdmin as never);
        return Response.json(result);
      },
    },
  },
});
