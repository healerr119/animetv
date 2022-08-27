import React, { useEffect, useState } from 'react'
import ListSingleFilm from '../ListSingleFilm'
import useSWR from 'swr';
import { useRouter } from 'next/router';
export default function SingleFilm(singleFilms) {
  const [pageIndex, setPageIndex] = useState(1);
  const router = useRouter();
  const {query} = router;
  useEffect(()=> {
    if(query.page){
      let p = Number(query.page) >= 1 ? query.page : 1;
      setPageIndex(Number(p))
    }
  })

  const pageNumClick = (pageIndex) => {
      console.log(pageIndex);
      let p = pageIndex >= 1 ? pageIndex : 1;
      router.replace(`?page=${p}`)
  };
  const fetcher = url => fetch(url).then(res => res.json())
  const {data, error} =  useSWR(singleFilms.singleFilms.titlePage === "Phim Mới" ? `${process.env.api_phim_moi}?page=${pageIndex}`
  : singleFilms.singleFilms.titlePage === "Phim Bộ" ? `${process.env.api_phim_bo}?page=${pageIndex}`
  : singleFilms.singleFilms.titlePage === "Phim Lẻ" ?  `${process.env.api_phim_le}?page=${pageIndex}`
  : singleFilms.singleFilms.titlePage === "Phim Hoạt Hình" ?  `${process.env.api_anime}?page=${pageIndex}`
  :''
  , fetcher) ;
 
  if (!data) return <div>Loading ...</div>
  return (
    <div className="app main">
      {/* <News /> */}
      <ListSingleFilm singleFilms={data} />
      <div className="container list-film">
          <div className='space-x-2 space-y-2 '>
            <div className='total-page'>
                <span>Tổng trang: {data.pageProps.data.params.pagination.totalItemsPerPage}</span>
            </div>
            <div className='pagination '>
                <button className='previous' onClick={() => pageNumClick(pageIndex - 1)}> {' '} Trang sau</button>
                <span className='number'>{pageIndex}</span>
                <button className='next' onClick={() => pageNumClick(pageIndex + 1)}> Trang kế tiếp</button>
              </div>
          </div>
      </div>
    </div>
  );
}
