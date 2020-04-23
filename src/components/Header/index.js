import React, { useState } from 'react'
import { Container, Div, Logo, ImageMenu, BurgerMenu, Lista, H2, Link, ImageProfile } from './styles'
import { Link as LinkHome } from '@reach/router'
import { Search } from '../Search'

export const Header = () => {
  const [state, setState] = useState('none')

  return (
    <Container>
      <Div>
        <ImageMenu src='../../../public/assets/images/menu.svg' alt='' onClick={() => state === 'none' ? setState('block') : setState('none')} />
        <BurgerMenu display={state}>
          <Search setState={setState} />
          <H2>Categorias</H2>
          <Lista>
            <Link to='/category/action' onClick={() => setState('none')}>accion</Link>
            <Link to='/category/mystery' onClick={() => setState('none')}>terror</Link>
            <Link to='/category/animation' onClick={() => setState('none')}>animadas</Link>
            <Link to='/category/all' onClick={() => setState('none')}>otros</Link>
          </Lista>
        </BurgerMenu>
        <LinkHome to='/'>
          <Logo src='../../../public/assets/images/netflix.svg' alt='' />
        </LinkHome>
        <ImageProfile src='../../../public/assets/images/cuenta.svg' alt='' />
      </Div>
    </Container>
  )
}
