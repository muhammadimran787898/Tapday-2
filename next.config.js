/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_SERVER: process.env.NEXT_APP_SERVER
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
