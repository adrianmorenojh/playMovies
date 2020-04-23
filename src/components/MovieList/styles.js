import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
`

export const H1 = styled.h1`
    text-align:center;
`

export const ArrowsContainer = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  margin-top:15px ;
  background-color: #071338;
`
export const Image = styled.img`
  margin: 0 10px;
  height: 50px;
 display:${props => props.none ? 'none' : 'block'};
`
