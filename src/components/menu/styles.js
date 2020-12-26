import styled from 'styled-components'

export const Container = styled.div`
    position:fixed;
    bottom:-1px;
    left:0;
    height: 50px;
    width:100vw;
    background:#2b303b;
    display: flex;
    align-items: center;
    justify-content:space-around;
    @media (min-width: 769px){
        display:none;
    }
    @media (max-height:320px){
        height: 40px;
    }

`

export const Image = styled.div`
    margin:0;

`