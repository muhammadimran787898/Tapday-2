/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/', // Change 'en' to your default language code
        permanent: true
      }
    ]
  },
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en'
  // },
  env: {
    NEXT_APP_SERVER: process.env.NEXT_APP_SERVER
  },
  reactStrictMode: false,
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
