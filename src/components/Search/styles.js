import styled from 'styled-components'

export const Buscador = styled.form`
margin: 0 20px;
width: 300px;
vertical-align: middle;
white-space: nowrap;
position: relative;
display:flex;
align-items: center;
justify-content: center;
`
export const Submit = styled.button`
  width: 35px;
  height: 40px;
  font-size: 16px;
  border-radius: 0px 3px 3px 0px;
  font-family: "Montserrat", sans-serif;
  background-color: #2b303b;
  border: none;
  margin: 0;
  padding: 7px 0;
  
`
export const Input = styled.input`
width: 260px;
height: 40px;
background: #2b303b;
border: none;
font-size: 10pt;
float: left;
color: #63717f;
padding-left: 25px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 3px 0 0 3px;
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
