import { createStart, createMiddleware } from "@tanstack/react-start";

import { getRequest } from "@tanstack/react-start/server";
import { canonicalPath } from "@/lib/seo-policy";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    const request = getRequest();
    const url = new URL(request.url);
    if ((request.method === "GET" || request.method === "HEAD") && url.pathname !== "/" && url.pathname.endsWith("/") && !url.pathname.startsWith("/api/")) {
      return new Response(null, { status: 301, headers: { Location: canonicalPath(url.pathname) + url.search } });
    }
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [errorMiddleware],
}));
