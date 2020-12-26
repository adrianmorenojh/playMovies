import styled from 'styled-components'
import { Link } from '@reach/router'

export const Container = styled.div`
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background:#21222a;
    z-index:3;
    box-sizing:border-box;
    @media (max-width:480px){
      padding: 0 10px;
    }
`

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index:4;
`

export const Logo = styled.div`
    padding:0px;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    font-weight: 900;
    font-style: italic;
    @media(max-width:768px){
        margin: 0 0 0 5px; 
    }
    @media(max-width:480px){
        display:none;
    }

      
`
export const P = styled.p`
    font-size:14px;
    margin-left:5px;
`

export const LinkRouter = styled(Link)`
    color:white;
    text-decoration:none;
    display: flex;
    align-items: center;
    :hover{
      opacity:.8;
    }
    @media(max-width:768px){
      display:none;
    }
`
export const LinkHome = styled(Link)`
  text-decoration:none;
  @media(max-width:560px){
    display:none;
  }
`
export const Title = styled.p`
  background: linear-gradient(90deg, rgb(160, 165, 171) 0%, #3a47d5 100%);
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
    font-size: 30px;
  line-height: .75;
  margin: 10px 0;
`