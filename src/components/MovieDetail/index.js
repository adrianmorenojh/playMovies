import React from 'react'
import { Container, Div, Info, Image, H1, Background } from './styles'
import { Sugerencias } from '../Sugerencias'
import { UseFetchDetail } from '../../Hooks/useFetchDetail'
import { Loading } from '../../styles/Loading'

export const MovieDetail = ({ id }) => {
  const { state } = UseFetchDetail({ id })
  return (state.status === 'ok' ? <Container>
    <H1>{state.data.movie.title}</H1>
    <Div>
      <Image src={state.data.movie.medium_cover_image} alt='cover' />
      <Info>
        <p>Rating : {state.data.movie.rating}</p>
        <p>time : {state.data.movie.runtime}min</p>
        {state.data.movie.genres ? <p>genero: {state.data.movie.genres[0]}</p> : <p>genero:  indefinido</p>}
        <p>lenguage : {state.data.movie.language}</p>leng
      </Info>
    </Div>
    <H1>Synopsis</H1>
    <p>{state.data.movie.description_full}</p>
    <Background src={state.data.movie.background_image} />
    <H1>Peliculas Relacionadas</H1>
    <Sugerencias id={id} />
                                  </Container>
    : state.status === 'error' ? <h1>lo sentimos, ha ocurrido un error</h1>
      : <Loading />
  )
}
