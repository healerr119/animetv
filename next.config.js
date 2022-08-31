/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.popsww.com', 
      'vnw-img-cdn.popsww.com',  
      'popsimg.akamaized.net', 
      'animehay.club', 
      '2phimmoi.net', 
      'phimhayhd.b-cdn.net',
      'img.ophim.cc'
    ],
  },
  env: {
    url_home: 'phimhayhd.club',
    url_image: 'https://img.ophim.cc/uploads/movies',
    url_api: 'https://ophim.tv',
    api_phim_moi: 'https://phimhayhd.club/api/phim-moi',
    api_phim_bo: 'https://phimhayhd.club/api/phim-bo',
    api_phim_le: 'https://phimhayhd.club/api/phim-le',
    api_anime: 'https://phimhayhd.club/api/anime',
    api_anime: 'https://phimhayhd.club/api/tim-kiem',
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-T7HVSJLJHT'
    // url: ''
  }
}

module.exports = nextConfig
