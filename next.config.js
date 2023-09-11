/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n')
const nextConfig = {
  env: {
    NEXT_APP_SERVER: process.env.NEXT_APP_SERVER
  },
  i18n: {
    locales: ['en-US', 'fr-FR', 'es-ES'],

    defaultLocale: 'en-US'
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/loading',
        permanent: true
      },
      {
        source: '/setting',
        destination: '/loading?page=setting',
        permanent: true
      },
      {
        source: '/engage',
        destination: '/loading?page=engage',
        permanent: true
      },
      // integrations
      {
        source: '/integrations',
        destination: '/loading?page=integrations',
        permanent: true
      },
      {
        source: '/analytics',
        destination: '/loading?page=analytics',
        permanent: true
      }
    ]
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
