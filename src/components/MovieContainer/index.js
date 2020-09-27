import React from 'react'
import { Movie, Image, Link } from './styles'

export const MovieContainer = ({ id, src , title, genre, rating, duration }) => {
  return (
    <Movie>
      <Link to={`/detail/${id}`}>
        <Image src={src} alt='' />
      </Link>
    </Movie>
  )
}
