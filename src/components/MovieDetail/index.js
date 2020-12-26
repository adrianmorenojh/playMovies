import React from 'react'
import {  Div, Info, Image, H1, Reproductor, Details, Title, Container, P, InfoP, FavIcon } from './styles'
import { Sugerencias } from '../suggestions'
import { UseFetchDetail } from '../../Hooks/useFetchDetail'
import { Loading } from '../../styles/Loading'
import { GiRoundStar } from "react-icons/gi";
import { ErrorContainer } from '../ErrorContainer'
import { IoIosTime } from "react-icons/io";

export const MovieDetail = ({ id }) => {
  const { state } = UseFetchDetail({ id })


  const handleClick = () =>{
    sessionStorage.setItem(id, state.data.movie.medium_cover_image)
  }



  return (state.status === 'ok' ? 
  <Container>
    <Div>
              <FavIcon onClick={handleClick} ><IoIosTime size='22px'/></FavIcon>

      <Image src={state.data.movie.large_cover_image} alt='cover' />
      <Details>
        <Title>
          <H1>{state.data.movie.title}</H1>
        </Title>
      </Details>
    </Div>
      <Info>
        <InfoP><GiRoundStar /> {state.data.movie.rating}</InfoP>
        <InfoP>{state.data.movie.runtime} min</InfoP>
        {state.data.movie.genres ? <InfoP>{state.data.movie.genres[0]}</InfoP> : <InfoP>genero:  indefinido</InfoP>}
      </Info>
    <H1>Synopsis</H1>
    <P>{state.data.movie.description_full}</P>
    <Reproductor src="https://www.youtube.com/embed/T_j60n1zgu0" controls poster={state.data.movie.background_image} />
    <H1>Peliculas Relacionadas</H1>
    <Sugerencias id={id} />
                                  </Container>
    : state.status === 'error' ? <ErrorContainer>lo sentimos, ha ocurrido un error</ErrorContainer>
      : <Loading />
  )
}
