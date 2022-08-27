import Image from 'next/image';
import React from 'react'

export default function ListFilm(ListFilm) {
    const films = ListFilm.ListFilm.DataFilm.items;
  return (
    <>
        <div className='container list-film'>
            <h3 className='title'>Phim Mới Cập Nhật</h3>
            <div className='row'>
                {films?.map((film, index) => {
                    return(
                        <div className='col-md-2' key={index}>
                                <div className='swiper-image'>
                                    <a href={`${film.slug}`}>
                                    <Image src={`${process.env.url_image}/${film.thumb_url}`} 
                                        width={220} height={250}  alt="image anime" />
                                        </a>
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
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">{pagination.currentPage}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pagination.currentPage + 1}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pagination.currentPage + 2}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pagination.currentPage + 3}</a></li>
                        <li className="page-item"><a className="page-link" href="#">{pagination.currentPage + 4}</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </div>
    </>
  )
}
