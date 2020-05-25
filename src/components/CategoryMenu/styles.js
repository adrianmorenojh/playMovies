import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Div = styled.div`
  position: absolute;
  top: 12px;
  left: 13px;

`

export const BurgerMenu = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 75px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid black;
  display: ${props => props.display};
`

export const Lista = styled.ul`
  padding: 0;
  margin: 0;
display:grid;
`
export const H2 = styled.h2`
  height: 55px;
  padding: 15px 0;
  text-align: center;
  color: white;
  margin: 0;
  font-size: 1.5em;
  box-sizing: border-box;
`
export const Link = styled(LinkRouter)`
  height: 43px;
  box-shadow: 0px 0px 1px;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  padding: 7px;
  text-align: center;
`
