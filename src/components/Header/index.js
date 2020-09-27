import React from 'react'
import { Container, Div} from './styles'
import { Search } from '../Search'
import Menu from '../CategoryMenu'


function Header () {
  return (
    <Container>
      <Div>
        <Menu />
        <Search />
      </Div>
    </Container>
  )
}
export default React.memo(Header)
