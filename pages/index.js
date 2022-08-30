import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home({data}) {
  return (
    <div className='app-root'>
      <Head>
        <title>Xem phim mới miễn phí nhanh chất lượng cao, hd. Chúc Các Bạn Xem Phim Vui Vẻ </title>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
        <meta name="description" content={data.data.pageProps.data.seoOnPage.descriptionHead} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta property="og:title" content={data.data.pageProps.data.seoOnPage.titleHead}></meta>
        <meta property="og:type" content={data.data.pageProps.data.seoOnPage.og_type}></meta>
        <meta property="og:description" content={data.data.pageProps.data.seoOnPage.descriptionHead}></meta>
        <meta property="og:url" content={`${process.env.url_home}`}></meta>
        <meta property="og:site_name" content="PHIMHAYHD.club"></meta>
        <meta name="twitter:title" content={data.data.pageProps.data.seoOnPage.titleHead}></meta>
        <meta name="twitter:description" content={data.data.pageProps.data.seoOnPage.descriptionHead}></meta>
        <meta property="og:locale" content="vi_VN"></meta>
        <link rel="icon" href="/phimhaydd.png" />
      </Head>
      <Header />
      <Main DataFilm = {data.data.pageProps.data} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/index.json')
  const data = await res.json()
  
  return {
    props: { 
      data: {data},
    },
    revalidate: 10, // In seconds
  }
}