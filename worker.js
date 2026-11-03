export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Permanent HTTP 301 redirect from www to apex domain
    if (url.hostname === "www.oriannedecoratrice.com") {
      url.hostname = "oriannedecoratrice.com";
      return Response.redirect(url.toString(), 301);
    }

    // 2. Fetch static asset
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    // 3. Security headers (Lighthouse Best Practices)
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    // 4. Efficient browser caching for static assets (/assets/* and /favicon.png)
    if (url.pathname.startsWith("/assets/") || url.pathname === "/favicon.png") {
      headers.set("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
