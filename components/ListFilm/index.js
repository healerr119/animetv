import Image from 'next/image';
import React from 'react'

export default function ListFilm({ListFilm, SearchFilm}) {
    let films = '';
    if(SearchFilm.params.keyword != "undefined")
    {
         films = SearchFilm.items;
    }else{
            films = ListFilm.DataFilm.items;
    }
  return (
    <>
        <div className='container list-film'>
            <h3 className='title'>{SearchFilm.params.keyword != "undefined" ? SearchFilm.titlePage : 'Phim Mới Cập Nhật'}</h3>
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
                                <a href={`${film.slug}`}>
                                    <h3 className='name'> {film.name}</h3>
                                </a>
                                <span className='origin_name' >{film.origin_name.substr(0, 20)}</span>
                                <div className='item'>
                                    <span className='sub'> {film.lang}</span>
                                    <a href={`${film.slug}`}>
                                        <span className='play-film'> Xem Phim</span>
                                    </a>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}
