import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    overflow: scroll;
    overflow-y: hidden;
    padding: 10px 0 60px;
    color:white;
    @media(min-width: 769px){
        overflow:hidden;
        padding: 10px 0 ;
    }
`
