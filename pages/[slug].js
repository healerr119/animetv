import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostFilm from '../components/PostFilm'

export default function FilmDetail({data}) {
    return (
    <>
        <Head>
            
        </Head>
        <Header />  
        <PostFilm filmDetail = {data} />
        <Footer />
    </>
    )
}
    
// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    const res = await fetch(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/index.json`)
    const data = await res.json()
    const results =  data.pageProps.data.items
    return {
      paths: results.map((post) => ({ params: {slug: post.slug}})),
      // paths: [{ params: { slug: 'test2' } }, { params: { slug: 'test3' } }],
      fallback: 'blocking', // can also be true or 'blocking'
    }
    // return {
    //   paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    //   fallback: false, // can also be true or 'blocking'
    // }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    const slug = context.params.slug;
    console.log(slug);
    const res = await fetch(`https://ophim1.com/phim/${slug}`)
    const data = await res.json()
    return {
      // Passed to the page component as props
      props: {
        data: {data}  
      },
    }
  }