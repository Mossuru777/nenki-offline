const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development"
});
const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : undefined;

/** @type {import('next').NextConfig} */
module.exports = withPWA({
    reactStrictMode: true,

    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true
});
