import styled from 'styled-components'
import { css } from 'styled-components';

export const Carousel = styled.div`
overflow: scroll;
overflow-y: hidden;
box-sizing: border-box;
width: 100%;
position: relative;
margin-bottom:15px;
  :: -webkit-scrollbar {
    width: 10px;
    height: 10px;
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
`
export const  Item = styled.img`
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 170px;
    height: 260px;
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: 450ms all;
    -webkit-transform-origin: center;
    transform-origin: center right;    
    :hover ~ ${Item} {
        
        -webkit-transform: translate3d(100px, 0, 0);
        transform: translate3d(100px, 0, 0);
    }
//     ${props => props.Ultimo && css`
//     margin-right: 70px;
//     transform-origin: center right;
//   `}
    
`
export const Peliculas = styled.div`
    transition: 450ms -webkit-transform;
    transition: 450ms transform;
    transition: 450ms transform, 450ms -webkit-transform;
    font-size: 0;
    white-space: nowrap;
    margin: 10px 25px;
    padding: 10px 0 20px;
    :hover ${Item} {
        opacity: 0.3;
    }
    :hover ${Item}:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 1;
    }
`