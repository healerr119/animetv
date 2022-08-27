import Head from 'next/head';
import React from 'react'
import SingleFilm from '../../components/SingleFilm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function FilmNews({data, page}) {
  return (
   <>
       <Head>

       </Head>
        <Header />
        <SingleFilm singleFilms = {data.data.pageProps.data} />
        <Footer />
   </>
  )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const page = 1;
    const res = await fetch(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/danh-sach/phim-moi.json?${page}&slug=phim-moi`)
    const data = await res.json()
    return {
      props: { 
        data: {data},
      },
    }
}