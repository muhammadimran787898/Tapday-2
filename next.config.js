/** @type {import('next').NextConfig} */
const { locales } = require('./lingui.config')
const nextConfig = {
  i18n: {
    localeDetection: true,
    locales,
    defaultLocale: 'en'
  },
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        resourceQuery: /raw-lingui/,
        type: 'javascript/auto'
      }
    ]

    return config
  },
  env: {
    NEXT_APP_SERVER: process.env.NEXT_APP_SERVER
  },

  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
