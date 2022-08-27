import React from 'react'
import ListFilm from '../ListFilm'

export default function Main(DataFilm) {
  return (
    <div className='app main'>
        <ListFilm ListFilm = {DataFilm} />
    </div>
  )
}
