import React from 'react'
import ListFilm from '../ListFilm'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Loading from '../Loading';
export default function Main(DataFilm) {
  const router = useRouter();
  const {query} = router;
  const search = query.timkiem;
  const fetcher = url => fetch(url).then(res => res.json())
  const {data, error} =  useSWR(`${process.env.api_search}?search=${search}`, fetcher)
  if (!data) return <Loading />
  return (
    <div className='app main'>
        <ListFilm 
            ListFilm = {DataFilm} 
            SearchFilm = {data.pageProps.data}
        />
    </div>
  )
}
