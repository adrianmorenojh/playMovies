import styled from 'styled-components'

export const Container = styled.div`
  width: 340px;
  max-width:340px;
  display: block;
  margin: 15px auto;
  text-align: center;
  box-shadow: 0 0 5px;
  padding:3px;
`
export const Image = styled.img`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 10px;
`

export const Info = styled.div`
  text-align: left;
  overflow-wrap: break-word;
`

export const Span = styled.span`
    font-size: 16px;
    font-weight: 700;
  opacity: 0.5;
`
export const H3 = styled.h3`
    margin: 0 0 10px 0;
    width: 98%;
    max-width:340px;
    font-size:1.1em;
    overflow-wrap: break-word;
    padding: 0 5px;
`
export const Button = styled.button`
    width: 100%;
    height:45px;
    background-color:#071338;
    border: none;
    border-radius: 5px;
    color:white;
    font-family: "Montserrat",sans-serif;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 0 0 2px;
`
export const ConfigButton = styled.button`
    width: 100%;
    height:45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#CACFD2;
    margin-top:5px;
    font-family: "Montserrat",sans-serif;
    box-shadow:0 0 2px;
    margin-bottom: 1px;
    font-size: 1em;
    font-weight: 700;
`
export const Icon = styled.img`
    width:40px;
    line-height:40px;
    margin: 0 5px;

`
export const H1 = styled.h1`
    font-weight:900;
    margin: 15px 0;
    font-size: 30px;

`
export const H2 = styled.h2`
    font-weight:900;
    font-size:26px;
    
`
