import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { MovieContainer } from '../MovieContainer'
import { ErrorContainer } from '../ErrorContainer'
import {Loading} from '../../styles/Loading'
function useSearch ({ search }) {
  const [state, setState] = useState([])
  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${search}`)
      .then(response => response.json())
      .then(data => setState(data))
  }, [search])
  return { state }
}

export const Results = ({ search }) => {
  const { state } = useSearch({ search })
  return (state.length === 0 ? <Loading />
    : state.data.movie_count === 0 ? <ErrorContainer> no se obtuvieron resultados</ErrorContainer>

      : <Container>
        {
          state.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
        }
      </Container>

  )
}
