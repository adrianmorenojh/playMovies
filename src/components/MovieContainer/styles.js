import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Movie = styled.div`
  background-color: #dfe2e5;
  text-align: center;
  margin: 10px 10px;
  box-shadow: 0 0 3px;
  border-radius: 5px;
  max-width:280px;
  height:400px;
  padding-bottom:5px;
  
`
export const Image = styled.img`
  width: 280px;
  height: 300px;
  border-radius: 5px;
`
export const P = styled.p`
font-size:12px;
`
export const Link = styled(LinkRouter)`
text-decoration: none;
`
