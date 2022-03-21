import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Div = styled.div`
    // position: absolute;
    top: 17px;
    left: 15px;
    z-index: 5;
    background: #21222a;
    display: flex;
    text-align:center;
    justify-content: center;
    border-radius: 2px;
    cursor:pointer;
    :hover{
      opacity: .8;
    }
    @media(max-width:360px){
      left:10px;
    }
    // @media(max-width:768px){
    //   left:position:absolute;
    // }

`
export const P = styled.p`
    font-size:14px;
    color:white;
    margin:auto 5px;
    @media(max-width:678px){
      display:none;
    }
`

export const Container = styled.div`
  overflow:none;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0px;
  z-index:4;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  // font-family: 'Lato', sans-serif;
  display: ${props => props.display};
  margin-bottom:15px;
  @media(max-width:480px){
    top: 3px;
  }
@media(max-width:480px){
width: 100vw;
}
`

export const Lista = styled.ul`
padding: 0;
margin: 60px 0 0 85px;
width: 35%;
height : 100vh;
//height: calc( 100vh - 52px );
overflow-y: scroll;
overflow-x:none;
:: -webkit-scrollbar {
width: 4px;
//height: 10px;
}
::-webkit-scrollbar-thumb {
background: #ccc;
border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover{
background: #b3b3b3;
box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb:active {
background-color: #999999;
}
@media(max-width:480px){
width: 100%;
margin: 0;
}
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
url(${props => props.image})
;
&:hover{
filter: blur(0.8px);

}
`
export const Link = styled(LinkRouter)`

`
