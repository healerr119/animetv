import React, { useEffect, useState } from 'react'
import ListSingleFilm from '../ListSingleFilm'
import News from '../News'
import Pagination from '../Pagination'
import useSWR from 'swr';
import { useRouter } from 'next/router';
export default function SingleFilm(singleFilms) {
  const [pageIndex, setPageIndex] = useState(1);
  const  pagination = singleFilms.singleFilms.params.pagination;
  const router = useRouter();
  const {query} = router;
  console.log(router);
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
  const {data, error} = useSWR(`${process.env.url}/api/phim-moi?page=${pageIndex}`, 
  fetcher)
  if (!data) return <div>Loading ...</div>
  console.log(data);
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
