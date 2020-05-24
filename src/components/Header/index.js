import React from 'react'
import { Container, Div, Logo, ImageProfile } from './styles'
import { Link as LinkHome } from '@reach/router'
import Menu from '../CategoryMenu'
function Header () {
  return (
    <Container>
      <Div>
        <Menu />
        <LinkHome to='/'>
          <Logo src='../../../public/assets/images/netflix.svg' alt='' />
        </LinkHome>
        <LinkHome to='/user'>
          <ImageProfile src='../../../public/assets/images/cuenta.svg' alt='' />
        </LinkHome>
      </Div>
    </Container>
  )
}
export default React.memo(Header)
