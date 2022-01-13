import React, { useState } from 'react'
import { Container, H2, Link, Lista, Div, Li, P } from './styles'
import { HiMenuAlt1 } from 'react-icons/hi'

function BurgerMenu () {
  const [state, setState] = useState('none')
  return (
    <>
      <Div onClick={() => state === 'none' ? setState('block') : setState('none')}>
        <HiMenuAlt1 size='20px' color='#a0a5ab' /> <P>Generos</P>
      </Div>
      <Container display={state}>
        <Lista>
          <Link to='/category/action' onClick={() => setState('none')}>
            <Li image='../../../public/assets/images/action.jpg'>
              <H2>Accion</H2>
            </Li>
          </Link>
          <Link to='/category/mystery' onClick={() => setState('none')}>
            <Li image='../../../public/assets/images/terror.jpg'>
              <H2>Terror</H2>
            </Li>
          </Link>
          <Link to='/category/animation' onClick={() => setState('none')}>
            <Li image='../../../public/assets/images/animation.jpg'>
              <H2>Animadas</H2>
            </Li>
          </Link>
          <Link to='/category/all' onClick={() => setState('none')}>
            <Li image='../../../public/assets/images/popular.jpg'>
              <H2>Populares</H2>
            </Li>
          </Link>
        </Lista>
      </Container>
    </>
  )
}

export default React.memo(BurgerMenu)
