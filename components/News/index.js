import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
export default function News() {
  return (
    <div className='container news'>
        <h3 className='title'>Anime Mới Cập Nhật</h3>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <Link href="/shows/diep-van">
                    <a>
                        <div className='swiper-image'>
                            <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_6c771c2ec429_1638852018668_decizcih_1-3022258d8711-1658480826534-FvYqRVOr.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime" />
                        </div>
                        <h3 className='name'> Doraemon</h3>
                        <div className='item'>
                            <span className='sub'> Lồng Tiếng</span>
                            <span className='number'> 464 tập</span>
                        </div>
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/shows/diep-van">
                    <a>
                    <div className='swiper-image'>
                        <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-2bbe6998526b-1630925995558-4mb7cvha.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                    </div>
                    <h3 className='name'> Doraemon</h3>
                    <div className='item'>
                        <span className='sub'> Lồng Tiếng</span>
                        <span className='number'> 464 tập</span>
                    </div>
                    </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-71c7e6974e57-1631519882314-ioJtMRJW.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_08_verticalposter-0bac2ceb825d-1616570058903-YmPzI6qL.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/vertical_poster-186e447b1c64-1594720933654-f5F67p9y.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_6c771c2ec429_1638852018668_decizcih_1-3022258d8711-1658480826534-FvYqRVOr.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_6c771c2ec429_1638852018668_decizcih_1-3022258d8711-1658480826534-FvYqRVOr.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_6c771c2ec429_1638852018668_decizcih_1-3022258d8711-1658480826534-FvYqRVOr.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/shows/diep-van">
            <a>
                <div className='swiper-image'>
                    <Image src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_6c771c2ec429_1638852018668_decizcih_1-3022258d8711-1658480826534-FvYqRVOr.png?v=0&maxW=260&format=webp" width={200} height={250} alt="image anime"/>
                </div>
                <h3 className='name'> Doraemon</h3>
                <div className='item'>
                    <span className='sub'> Lồng Tiếng</span>
                    <span className='number'> 464 tập</span>
                </div>
                </a>
                </Link>
            </SwiperSlide>
         
        </Swiper>
    </div>
  )
}
