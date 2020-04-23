import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
    height: 75px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #071338;
  box-shadow: 0 0 5px black;
`
export const Logo = styled.img`
  width: 70px;
`
export const ImageMenu = styled.img`
  position: absolute;
  top: 15px;
  left: 13px;
  width: 40px;
`
export const ImageProfile = styled.img`
  position: absolute;
  top: 15px;
  right: 13px;
  width: 40px;
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
