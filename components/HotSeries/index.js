import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HotSeries() {
  return (
    <div className='container hot-series'>
        <h3 className='title'>Hot Series</h3>
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
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_04_thumbnailtitle-34c529eff5b7-1609395196058-lnUOAYKO.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title_revised-91818d482e72-1649834178978-k4TT81z2.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title__1_-26a26944f6c3-1631519849636-U2bGwMPx.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title-66aee0005e25-1615365333873-a9OPOSey.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title-5e2e73392d2e-1649063091059-vBg7rcoA.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/aot_thumbnail_title-496321424964-1623151672446-gVhWEmCO.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title-36577f3a890c-1647940242385-dYkouUKN.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title_revised__4_-fb6df5164485-1633318073662-41b1JFUR.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='swiper-image'>
                    <img src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/thumbnail_title-e09cfa4482e9-1606807855486-rvfgsqbh.png?v=0&maxW=300&format=webp" width={170} height={170} />
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    </div>
  )
}
