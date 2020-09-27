import React, { useContext } from 'react'
import { Context } from '../../Context/ContextAuth'
import { Container, H3, Image, Info, Button, ConfigButton, H2, Profile, Icon } from './styles'
import { AiOutlineMail } from "react-icons/ai";
import { MdSettings } from "react-icons/md";

export const User = () => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))

  const { removeAuth } = useContext(Context)
  return (
    <Container>
      <Profile>
        <Image
          src='https://i.pinimg.com/236x/11/dc/ca/11dcca884207c1434939f357060765d9--koch-wisconsin.jpg'
          alt=''
        />
        <H2>
          {user.data.user}
        </H2>
        <Info>
          <H3>{user.data.name}</H3>
          <H3><Icon><AiOutlineMail/></Icon>{user.data.email}</H3>
        </Info>
        <ConfigButton>
            <Icon><MdSettings /></Icon>    configuraciones.
        </ConfigButton>
        <Button onClick={removeAuth}>
            Cerrar Sesion.
        </Button>
      </Profile>
    </Container>
  )
}
