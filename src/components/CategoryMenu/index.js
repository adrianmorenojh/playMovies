import React, { useState } from 'react'
import { BurgerMenu, H2, Link, Lista, Div } from './styles'
import { Search } from '../Search'
import MenuIcon from './icon/Menu.js'

function Menu () {
  const [state, setState] = useState('none')
  return (
    <>
      <Div onClick={() => state === 'none' ? setState('block') : setState('none')}>

        <MenuIcon />
      </Div>
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

export default React.memo(Menu)
