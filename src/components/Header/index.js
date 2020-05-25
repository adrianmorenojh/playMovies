import React from 'react'
import { Container, Div, Image } from './styles'
import { Link as LinkHome } from '@reach/router'
import Menu from '../CategoryMenu'
import Icon from './icons/icon'
import User from './icons/user'
function Header () {
  return (
    <Container>
      <Div>
        <Menu />
        <LinkHome to='/'>
          <Icon />
        </LinkHome>
        <LinkHome to='/user'>
          <Image>
            <User />
          </Image>
        </LinkHome>
      </Div>
    </Container>
  )
}
export default React.memo(Header)
