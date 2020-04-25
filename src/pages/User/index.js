import React from 'react'
import { Container, Span, H3, Image, Info, Button, ConfigButton, Icon, H1, H2 } from './styles'

export const User = () => {
  return (
    <Container>
      <H1>User</H1>
      <Image
        src='https://i.pinimg.com/236x/11/dc/ca/11dcca884207c1434939f357060765d9--koch-wisconsin.jpg'
        alt=''
      />
      <H2>
        Ferchete
      </H2>
      <Info>
        <H3><Span>Nombre :</Span> Luis casique</H3>
        <H3><Span>Email :</Span> tupapitorico@gmail.com</H3>
      </Info>
      <ConfigButton>
          configuraciones.
        <Icon src='../../../public/assets/images/configuration.svg' />
      </ConfigButton>
      <Button>
          Cerrar Sesion.
      </Button>
    </Container>
  )
}
