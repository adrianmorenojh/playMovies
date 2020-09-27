import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 55px;
`
export const Div = styled.div`
  width: 90vw;
  height: 75vh;
  max-width: 375px;
  padding-top: 10px;
  margin: 5px auto;
  border-radius: 3px;
  background: rgb(200, 200, 200);

`
export const H1 = styled.h1`
  text-align: center;
  margin: 40px 0;
  color: #21222a;
  font-size: 26px;
  font-weight: 600;
`
export const Form = styled.form`
  padding: 10px;
`
export const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    height: 45px;
    border-radius: 5px;
    border: none;
    padding: 0 15px;
    box-sizing: border-box;
    background: #2b303b;
    :hover {
      outline:none;
      background: #474952;
    
    }
    
      ::-webkit-input-placeholder {
      color: #65737e; !important;
      font-family: "Montserrat", sans-serif;
      font-weight:600;
    }
`
export const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  border:none;
  margin: 10px 22%;
  background: #0b121d;
  color: white;
  font-size: 18px;
  font-weight: 600;
`
