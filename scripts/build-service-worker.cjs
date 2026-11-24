const {generateSW} = require("workbox-build");

const scope = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}/` : "/";

async function buildServiceWorker() {
  // 公開される HTML と静的ファイルを同じビルドからキャッシュする。
  const {count, warnings} = await generateSW({
    globDirectory: "out",
    globPatterns: ["**/*"],
    globIgnores: ["**/*.map", "sw.js", "workbox-*.js"],
    modifyURLPrefix: {"": scope},
    swDest: "out/sw.js",
    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [{
      urlPattern: ({request, sameOrigin}) => sameOrigin && request.mode === "navigate",
      handler: "NetworkOnly",
      options: {precacheFallback: {fallbackURL: `${scope}_offline/index.html`}}
    }]
  });

  if (warnings.length || count === 0) {
    throw new Error(warnings.join("\n") || "キャッシュ対象のファイルがありません");
  }
}

buildServiceWorker().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
