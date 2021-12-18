const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : "";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }
    return config;
  },

  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true
}
