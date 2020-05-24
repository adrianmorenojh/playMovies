import React from 'react'
import { Category } from './styles.js'
import { MovieContainer } from '../MovieContainer'
import { UseFetchData } from '../../Hooks/useFetchData'
import { Loading } from '../../styles/Loading'

export const CategoryContainer = React.memo(({ category }) => {
  const { state } = UseFetchData({ category })
  return (state.status === 'ok' ? <Category>
    {
      state.data.movies.map(movie => <MovieContainer
        key={movie.id}
        id={movie.id}
        src={movie.medium_cover_image}
        title={movie.title}
        genre={movie.genres ? movie.genres[0] : 'indefinido'}
        rating={movie.rating}
        duration={movie.runtime}
      />)
    }
  </Category>
    : state.status === 'error' ? <h1>Lo sentimos, Ha ocurrido un error</h1>
      : <Loading />

  )
})
