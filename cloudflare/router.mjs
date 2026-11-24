const prefix = "/nenki-offline";

const router = {
  async fetch(request, env) {
    const publicUrl = new URL(request.url);
    if (publicUrl.pathname === prefix) {
      publicUrl.pathname += "/";
      return Response.redirect(publicUrl, 308);
    }

    // 同じドメイン上の他のサイトは既存のオリジンで配信する。
    if (!publicUrl.pathname.startsWith(`${prefix}/`)) {
      return fetch(request);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, {status: 405, headers: {Allow: "GET, HEAD"}});
    }

    const pagesUrl = new URL(env.PAGES_ORIGIN);
    pagesUrl.pathname = publicUrl.pathname;
    pagesUrl.search = publicUrl.search;
    const headers = new Headers(request.headers);
    headers.delete("host");
    headers.delete("cookie");
    headers.delete("authorization");
    const response = await fetch(pagesUrl, {
      method: request.method,
      headers,
      redirect: "manual"
    });

    const location = response.headers.get("Location");
    if (!location || response.status < 300 || response.status >= 400) {
      return response;
    }

    const destination = new URL(location, pagesUrl);
    if (destination.origin !== pagesUrl.origin) {
      return response;
    }

    // Pages が正規化した URL でも、ブラウザーのオリジンを維持する。
    const redirected = new Response(response.body, response);
    redirected.headers.set("Location", `${publicUrl.origin}${destination.pathname}${destination.search}${destination.hash}`);
    return redirected;
  }
};

export default router;
