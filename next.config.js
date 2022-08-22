/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.popsww.com', 'vnw-img-cdn.popsww.com',  'popsimg.akamaized.net', 'animehay.club', '2phimmoi.net'],
  },
}

module.exports = nextConfig
