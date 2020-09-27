import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
`

export const H1 = styled.h1`
font-size: 1.5em;
color:white;
margin:5px 0 10px 25px;
font-weight: 500;
`

export const ArrowsContainer = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  margin-bottom: 55px;
`
export const Div = styled.div`
  margin: 0 10px;
  height: 50px;
  width:50px;
 opacity:${props => props.none ? '.3' : '1'};
`
