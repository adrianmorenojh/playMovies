import React from 'react'
import { Movie, Image, Link } from './styles'

export const MovieContainer = ({ id, src }) => {
  return (
    <Movie>
      <Link to={`/detail/${id}`}>
        <Image src={src} alt='' />
      </Link>
    </Movie>
  )
}
