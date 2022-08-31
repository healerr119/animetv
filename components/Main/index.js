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
  const {data, error} =  useSWR(`http://localhost:3000/api/tim-kiem?search=${search}`, fetcher)
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
