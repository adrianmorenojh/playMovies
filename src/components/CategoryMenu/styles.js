import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Div = styled.div`
  position: absolute;
    top: 17px;
    left: 20px;
    z-index: 5;
    background: #21222a;
    display: flex;
    border-radius: 2px;

`

export const BurgerMenu = styled.div`
  overflow: overlay;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 3px;
  z-index:4;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  // font-family: 'Lato', sans-serif;
  display: ${props => props.display};
`

export const Lista = styled.ul`
padding:0;
margin:0;
width:100%;
`
export const H2 = styled.h2`
    position: absolute;
    font-weight: 700;
    font-size: 36px;
    top: 100px;
    left: 45px;
    color: white;
`
export const Li = styled.li`
margin: 0;
position: relative;
max-width:100%;
width: 100vw;
height: 200px;
background-position: center;
background-size: cover;
background-image: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0) 100%),
   url(${props=> props.image})
;
`
export const Link = styled(LinkRouter)`

`
