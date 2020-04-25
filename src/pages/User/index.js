import React, { useContext } from 'react'
import { Context } from '../../Context/ContextAuth'
import { Container, Span, H3, Image, Info, Button, ConfigButton, Icon, H1, H2 } from './styles'

export const User = () => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  console.log(user)
  const { removeAuth } = useContext(Context)
  return (
    <Container>
      <H1>User</H1>
      <Image
        src='https://i.pinimg.com/236x/11/dc/ca/11dcca884207c1434939f357060765d9--koch-wisconsin.jpg'
        alt=''
      />
      <H2>
        {user.data.user}
      </H2>
      <Info>
        <H3><Span>Nombre :</Span> {user.data.name}</H3>
        <H3><Span>Email :</Span> {user.data.email}</H3>
      </Info>
      <ConfigButton>
          configuraciones.
        <Icon src='../../../public/assets/images/configuration.svg' />
      </ConfigButton>
      <Button onClick={removeAuth}>
          Cerrar Sesion.
      </Button>
    </Container>
  )
}
