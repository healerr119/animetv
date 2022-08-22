import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='app-root'>
      <Head>
        <title>Xem phim mới miễn phí nhanh chất lượng cao </title>
        <meta name="description" content="Xem Phim online Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
