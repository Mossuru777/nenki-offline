const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : undefined;

/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    reactStrictMode: true,

    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true
};
