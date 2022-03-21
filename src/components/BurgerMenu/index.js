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
            <Li image='https://i.blogs.es/8cb1c2/mejores-peliculas-accion-2021/1366_2000.jpeg'>
              <H2>Accion</H2>
            </Li>
          </Link>
          <Link to='/category/mystery' onClick={() => setState('none')}>
            <Li image='https://s3.cine3.com/2021/12/peliculas-de-terror-mas-esperadas-2022-destacada.png'>
              <H2>Terror</H2>
            </Li>
          </Link>
          <Link to='/category/animation' onClick={() => setState('none')}>
            <Li image='https://www.lasopa.com/wp-content/uploads/2021/05/mejores-peliculas-disney.jpg'>
              <H2>Animadas</H2>
            </Li>
          </Link>
          <Link to='/category/all' onClick={() => setState('none')}>
            <Li image='https://s1.eestatic.com/2019/12/17/series/cine/cine_452716408_140701018_1706x960.jpg'>
              <H2>Populares</H2>
            </Li>
          </Link>
        </Lista>
      </Container>
    </>
  )
}

export default React.memo(BurgerMenu)
