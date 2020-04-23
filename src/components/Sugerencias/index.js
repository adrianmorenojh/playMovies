import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { MovieContainer } from '../MovieContainer'

export const Sugerencias = ({ id }) => {
  const [sugerencia, setSugerencia] = useState([])
  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
      .then(response => response.json())
      .then(data => setSugerencia(data))
  }, [id])

  return (sugerencia.length === 0 ? <h1>Loading...</h1>

    : <Container>
      {
        sugerencia.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
      }
      </Container>
  )
}
