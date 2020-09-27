import styled from 'styled-components'

export const Image = styled.img`
@media(max-width: 480px){
    width:100%;
    height: 100%;

}
    height: 76%;
    width: 480px;

    
`
export const Container = styled.div`
    display :flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    width:100vw;
    height: calc(100vh - 60px);
    background:#1c273a;
`
