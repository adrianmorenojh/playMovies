import React from 'react'
import { Container, H1, ArrowsContainer, Image } from './styles'
import { MovieContainer } from '../MovieContainer'
import { UseFetchData } from '../../Hooks/useFetchData'
import { Loading } from '../../styles/Loading'
export const MovieList = ({ category }) => {
  const { state, number, setNumber } = UseFetchData({ category })
  return (state.status === 'ok' ? <>

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
    : state.status === 'error' ? <h1>Ha ocurrido un error</h1>
      : <Loading />
  )
}
