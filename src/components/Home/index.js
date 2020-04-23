import React from 'react'
import { Title } from './styles'

import { CategoryContainer } from '../CategoryContainer'

export const Home = () => {
  return (
    <>
      <Title>Peliculas Reacomendadas</Title>
      <CategoryContainer category='all' />
      <Title>Action</Title>
      <CategoryContainer category='action' />
      <Title>Terror</Title>
      <CategoryContainer category='mystery' />
      <Title>Animacion</Title>
      <CategoryContainer category='animation' />
      <Title>Comedia</Title>
      <CategoryContainer category='comedy' />
      <Title>Horror</Title>
      <CategoryContainer category='horror' />
      <Title>Romance</Title>
      <CategoryContainer category='romance' />

    </>

  )
}
