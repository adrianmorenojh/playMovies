import React, { useState } from 'react'
import { BurgerMenu, H2, Link, Lista, ImageMenu } from './styles'
import { Search } from '../Search'

export const Menu = () => {
  const [state, setState] = useState('none')
  return (
    <>
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
    </>
  )
}
