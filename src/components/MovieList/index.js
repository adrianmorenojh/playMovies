import React, { useState, useEffect } from 'react'
import { Container, H1, ArrowsContainer, Image } from './styles'
import { MovieContainer } from '../MovieContainer'

export const MovieList = ({ category }) => {
  const [state, setState] = useState([])
  const [number, setNumber] = useState(1)

  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/list_movies.json?genre=${category}&limit=20&page=${number}`)
      .then(response => response.json())
      .then(data => setState(data))
  }, [category, number])

  return (state.length === 0 ? <h1>Loading...</h1>

    : <>
      <H1>{category}</H1>
      <Container>

        {
          state.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
        }
      </Container>
      <ArrowsContainer>
        {number === 1 ? <Image src='../../../public/assets/images/previous.svg' none onClick={() => setNumber(number - 1)} />
          : <Image src='../../../public/assets/images/previous.svg' onClick={() => setNumber(number - 1)} />}

        {number === 10 ? <Image src='../../../public/assets/images/next.svg' none onClick={() => setNumber(number + 1)} />
          : <Image src='../../../public/assets/images/next.svg' onClick={() => setNumber(number + 1)} />}
      </ArrowsContainer>
      </>
  )
}
