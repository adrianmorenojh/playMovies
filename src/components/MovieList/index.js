import React from 'react'
import { Container, H1, ArrowsContainer, Div } from './styles'
import { MovieContainer } from '../MovieContainer'
import { UseFetchData } from '../../Hooks/useFetchData'
import { Loading } from '../../styles/Loading'
import { MdNavigateBefore, MdNavigateNext  } from "react-icons/md";

export const MovieList = ({ category }) => {
  const { state, number, setNumber } = UseFetchData({ category })
  console.log(state)
  return (state.status === 'ok' ? <>
    <H1>{category}</H1>
    <Container>

      {
        state.data.movies.map(movie => <MovieContainer key={movie.id} id={movie.id} src={movie.medium_cover_image} title={movie.title} genre={movie.genres[0]} rating={movie.rating} duration={movie.runtime} />)
      }
    </Container>
    <ArrowsContainer>
      {number === 1 ? <Div none onClick={() => setNumber(number - 1)}><MdNavigateBefore size= '50px' color ='#cfd8da' /></Div>
        : <Div onClick={() => setNumber(number - 1)}><MdNavigateBefore size= '50px' color ='#cfd8da' /></Div>}

      {number === 10 ? <Div none onClick={() => setNumber(number + 1)}><MdNavigateNext size= '50px' color ='#cfd8da'/></Div>
        : <Div onClick={() => setNumber(number + 1)}><MdNavigateNext size= '50px' color ='#cfd8da' /></Div>}
    </ArrowsContainer>
                                  </>
    : state.status === 'error' ? <h1>Ha ocurrido un error</h1>
      : <Loading />
  )
}
