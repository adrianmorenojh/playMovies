import React, { useState, useEffect } from 'react'
import { Container, Div, Info, Image, H1, Background } from './styles'
import { Sugerencias } from '../Sugerencias'

export const MovieDetail = ({ id }) => {
  const [state, setState] = useState([])
  useEffect(() => {
    window.fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(response => response.json())
      .then(data => setState(data))
  }, [id])

  return (state.length === 0 ? <h1>Loading...</h1>

    : <Container>
      <H1>{state.data.movie.title}</H1>
      <Div>
        <Image src={state.data.movie.medium_cover_image} />
        <Info>
          <p>Rating : {state.data.movie.rating}</p>
          <p>time : {state.data.movie.runtime}</p>
          <p>generos : {state.data.movie.genres[0]}</p>
          <p>lenguage : {state.data.movie.language}</p>leng
        </Info>
      </Div>
      <H1>Snopsis</H1>
      <p>{state.data.movie.description_full}</p>
      <Background src={state.data.movie.background_image} />
      <H1>Peliculas Relacionadas</H1>
      <Sugerencias id={id} />
    </Container>
  )
}
