import styled from 'styled-components'
import { Link  as LinkRouter} from '@reach/router'
export const Div = styled.div`
    width:50%;

` 
export const Lista = styled.ul`
  padding:0;
  margin:0;
  width:100%;
  display:flex;
  list-style: none;

`
export const Li = styled.li`
  margin: 0;

  position: relative;
  max-width:100%;
  width: 110px;
  height: 50px;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%),
    url(${props=> props.image})
  ;
`
export const H2 = styled.h2`
    font-weight: 500;
    font-size: 18px;
    color: white;

`
export const Link = styled(LinkRouter)`
text-decoration: none;
`