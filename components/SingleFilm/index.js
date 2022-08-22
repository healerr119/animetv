import React from 'react'
import ListSingleFilm from '../ListSingleFilm'
import News from '../News'

export default function SingleFilm() {
  return (
    <div className='app main'>
        <News />
        <ListSingleFilm />
    </div>
  )
}
