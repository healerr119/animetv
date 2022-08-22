import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
      import("bootstrap/dist/js/bootstrap");
  },[])
  return <Component {...pageProps} />
}

export default MyApp
