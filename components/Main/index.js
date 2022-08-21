import React from 'react'
import HotSeries from '../HotSeries'
import ListFilm from '../ListFilm'
import News from '../News'

export default function Main() {
  return (
    <div className='app main'>
        <HotSeries />
        <News />
        <ListFilm />
    </div>
  )
}
