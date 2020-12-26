import styled from 'styled-components'

export const Buscador = styled.form`
  width: 45%;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  @media (max-width:768px){
    width: 55%;
  }
  @media(max-width:560px){
    width:80%;
  }
  @media (max-width:480px){
    margin: 0 10px;
  }
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
  width:100%;
  height: 40px;
  background: #2b303b;
  border: none;
  font-size: 12px;
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
// @media (max-width:480px){
//   width: 260px;
// }
`
