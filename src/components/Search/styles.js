import styled from 'styled-components'

export const Buscador = styled.form`
margin-top: 10px;
display: flex;
    justify-content: center;
`
export const Submit = styled.input`
  width: 100px;
  height: 35px;
  font-size: 16px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: white;
  background-color: #071338;
  border: none;
  box-shadow: 0 0 1px white;
  margin: 0 5px;
  ::-webkit-input-placeholder {
  color: white !important;
  font-family: "Montserrat", sans-serif;
}
`
export const Input = styled.input`
  margin: 0 10px;
  border: none;
  box-shadow: 0 0 1px white;
  border-radius: 5px;
  padding: 0 0 0 10px;
  height: 35px;
  width: 300px;
  background-color: #172654;
  font-size: 16px;
  color:white;
  ::-webkit-input-placeholder {
  color: white !important;
  font-family: "Montserrat", sans-serif;
}
`
