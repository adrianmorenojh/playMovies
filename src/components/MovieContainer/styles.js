import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/Animation'

export const Movie = styled.div`
    width:155px;
    height: 225px;
    margin: 7px 5px;
    min-width:150px;
`
export const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:5px;
    ${fadeIn('30s')}
`
export const Link = styled(LinkRouter)`
    text-decoration: none;
`
