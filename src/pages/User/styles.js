import styled from 'styled-components'

export const Container = styled.div`
  width:100vw;
  height: calc(100vh - 110px);
`
export const Image = styled.img`
  border-radius: 50%;
  height: 170px;
  width: 170px;
  margin: 0 auto;
`

export const Info = styled.div`
  text-align: left;
  overflow-wrap: break-word;
  color:white;
  margin: 45px 0 0;
`

export const Span = styled.span`
    font-size: 16px;
    font-weight: 700;
  opacity: 0.5;
`
export const H3 = styled.h3`
    margin: 0 0 2px 0;
    width: 100%;
    font-size:1em;
    font-weight:700;
    padding-left: 10px;
    box-sizing: border-box;
    overflow-wrap: break-word;
    height: 45px;
    display: flex;
    align-items: center;
    background: #2b303b;
`
export const Button = styled.button`
    width: 100%;
    height:50px;
    border: none;
    font-family: "Montserrat",sans-serif;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(200, 200, 200);

    color: #21222a;
`
export const ConfigButton = styled.button`
    width: 100%;
    height:45px;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color:#2b303b;
    margin-top:2px;
    font-family: "Montserrat",sans-serif;
    border:none;
    color:white;
    margin-bottom: 1px;
    font-size: 1em;
    font-weight: 700;
    padding-left: 10px;
`
export const H2 = styled.h2`
    font-weight: 600;
    font-size: 26px;
    color: white;
    
`
export const Profile = styled.div`
box-shadow: 0px 0px 10px 0px;
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 375px;
    display: block;
    padding: 25px 0;
    text-align: center;
    position:relative;
    // background: #2b303b;
}
`
export const Icon = styled.div`
  margin: 0 5px 0 0;
  display:flex;
`