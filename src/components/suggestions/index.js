import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { MovieContainer } from '../MovieContainer'
import { Loading } from '../../styles/Loading'

function useSuggestions ({ id }) {
  const [sugerencia, setSugerencia] = useState([])

  useEffect(() => {
    const abortController = new window.AbortController()
    const signal = abortController.signal
    window.fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`, { signal: signal })
      .then(response => response.json())
      .then(data => setSugerencia(data))

    return function cleanup () {
      abortController.abort()
    }
  }, [id])

  return { sugerencia }
}

export const Sugerencias = ({ id }) => {
  const { sugerencia } = useSuggestions({ id })
  return (sugerencia.status === 'ok' ? <Container>
    {
      sugerencia.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
    }
                                       </Container>
    : sugerencia.status === 'error' ? <h1>Lo sentimos, ha ocurrido un error</h1>
      : <Loading />

  )
}
