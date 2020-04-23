import React from 'react'
import { Movie, Image, P, Link } from './styles'

export const MovieContainer = ({ id, src, title, genre, rating, duration }) => {
  return (
    <Movie>
      <Link to={`/detail/${id}`}>
        <Image src={src} alt='' />
        <h3>{title}</h3>
        <P>{genre}    {rating}rating    {duration} min</P>
      </Link>
    </Movie>
  )
}
