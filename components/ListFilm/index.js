import Image from 'next/image';
import React from 'react'

export default function ListFilm(ListFilm) {
    const films = ListFilm.ListFilm.DataFilm;
  return (
    <>
        <div className='container list-film'>
            <h3 className='title'>Phim Mới</h3>
            <div className='row'>
                {films?.map((film, index) => {
                    return(
                        <div className='col-md-2' key={index}>
                                <div className='swiper-image'>
                                    <Image src={`${process.env.url_image}/${film.thumb_url}`} 
                                        width={220} height={250}  alt="image anime" />
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
    </>
  )
}
