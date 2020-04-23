import React, { useEffect, useState } from 'react'
import { Category } from './styles.js'
import { MovieContainer } from '../MovieContainer'

export const CategoryContainer = ({ category }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/list_movies.json?genre=${category}`)
      .then(response => response.json())
      .then(data => setState(data))
  }, [])

  return (state.length === 0 ? <h1>Loading...</h1>

    : <Category>
      {
        state.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
      }
    </Category>
  )
}
