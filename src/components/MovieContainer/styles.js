import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/Animation'

export const Movie = styled.div`
  background-color: #dfe2e5;
  text-align: center;
  margin: 10px 10px;
  box-shadow: 0 0 3px;
  border-radius: 5px;
  max-width:350px;
  height:440px;
  padding-bottom:5px;
  min-width:350px;
  
`
export const Image = styled.img`
  width: 350px;
  height: 360px;
  border-radius: 5px;
${fadeIn('30s')}
`
export const P = styled.p`
font-size:12px;
`
export const Link = styled(LinkRouter)`
text-decoration: none;
`
