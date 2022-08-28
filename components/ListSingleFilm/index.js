import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListSingleFilm(singleFilms) {
    const films =  singleFilms.singleFilms.pageProps.data.items;
    const breadcrumb = singleFilms.singleFilms.pageProps.data.breadCrumb;
    return (
        <div className='container list-film'>
            <h3 className='title'>{singleFilms.singleFilms.pageProps.data.titlePage}</h3>
            <div className='breadcrumb'>
                {'Home > ' + singleFilms.singleFilms.pageProps.data.titlePage +' > '+ breadcrumb[1].name}
            </div>
            <div className='row'>
                {films?.map((film, index) => {
                    return(
                        <div className='col-md-2' key={index}>
                                <div className='swiper-image'>
                                    <a href={`${film.slug}`}>
                                    <Image src={`${process.env.url_image}/${film.thumb_url}`} 
                                        width={220} height={250}  alt="image anime" />
                                        </a>
                                        <div className="episode_latest">
                                        {film.episode_current}
                                    </div>
                                </div>
                                <h3 className='name'> {film.name.substr(0, 20)}</h3>
                                <span className='origin_name' >{film.origin_name.substr(0, 20)}</span>
                                <div className='item'>
                                    <span className='sub'> {film.lang}</span>
                                    <span className='play-film'> Xem Phim</span>
                                </div>
                        </div>
                    )
                })}
            
            </div>
    </div>
    )
}
