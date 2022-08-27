import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data);
  return (
    <div className='app-root'>
      <Head>
        <title>Xem phim mới miễn phí nhanh chất lượng cao </title>
        <meta name="description" content={data.data.pageProps.data.seoOnPage.descriptionHead} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
        <meta property="og:type" content={data.data.pageProps.data.seoOnPage.og_type}></meta>
        <meta property="og:description" content={data.data.pageProps.data.seoOnPage.descriptionHead}></meta>
        <meta property="og:url" content={`${process.env.url_home}`}></meta>
        <meta property="og:site_name" content="PHIMHAYHD"></meta>
        <link rel="icon" href="/favicon.ico" />
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
  
  // const items = data.posts.pageProps.data.items;
  // const seoOnPage = data.posts.pageProps.data.seoOnPage;
  // const params = data.posts.pageProps.dataparams;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { 
      data: {data},
    },
  }
}