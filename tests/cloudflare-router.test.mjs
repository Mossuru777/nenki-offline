import assert from "node:assert/strict";
import {test} from "node:test";
import router from "../cloudflare/router.mjs";

const env = {PAGES_ORIGIN: "https://nenki-offline.pages.dev"};

test("末尾スラッシュへの転送でも公開オリジンとクエリを維持する", async () => {
  const response = await router.fetch(new Request("https://mossuru777.net/nenki-offline?a=1"), env);
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("Location"), "https://mossuru777.net/nenki-offline/?a=1");
});

test("Cloudflare Pages の転送先から公開オリジンを維持する", async (context) => {
  const upstream = context.mock.method(globalThis, "fetch", () =>
    Response.redirect("https://nenki-offline.pages.dev/nenki-offline/_offline/?a=1", 308)
  );
  const response = await router.fetch(new Request(
    "https://mossuru777.net/nenki-offline/_offline/index.html?a=1",
    {headers: {Cookie: "session=example", "If-None-Match": "example"}}
  ), env);
  const [url, options] = upstream.mock.calls[0].arguments;
  assert.equal(url.href, "https://nenki-offline.pages.dev/nenki-offline/_offline/index.html?a=1");
  assert.equal(options.headers.get("Cookie"), null);
  assert.equal(options.headers.get("If-None-Match"), "example");
  assert.equal(response.headers.get("Location"), "https://mossuru777.net/nenki-offline/_offline/?a=1");
});

test("似たパスの別サイトは既存オリジンに渡す", async (context) => {
  const upstream = context.mock.method(globalThis, "fetch", () => new Response("既存サイト"));
  const request = new Request("https://mossuru777.net/nenki-offline-other/");
  const response = await router.fetch(request, env);
  assert.equal(upstream.mock.calls[0].arguments[0], request);
  assert.equal(await response.text(), "既存サイト");
});
