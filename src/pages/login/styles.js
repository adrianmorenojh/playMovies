import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div = styled.div`
  min-height: 470px;
  max-width: 375px;
  min-width: 340px;
  padding: 10px 30px;
  box-sizing: border-box;
  border-radius: 3px;
  width: 25%;
  height: 45%;
  background: rgb(230, 230, 230);
`;
export const H2 = styled.h2`
  text-align: center;
  margin: 30px 0;
`;
export const P = styled.p`
  text-align: center;
  opacity: 0.8;
`;

export const Form = styled.form`
  display: block;
`;
export const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    height: 45px;
    border-radius: 5px;
    border: none;
    padding: 0 15px;
    box-sizing: border-box;
    background: rgb(230, 230, 230);
    :hover {
      outline:none;
      background: rgb(225, 225, 225);
    
    }
  
      ::-webkit-input-placeholder {
      color: #65737e; !important;
      font-family: "Montserrat", sans-serif;
      font-weight:600;
    }
`;
export const Button = styled.button`
  margin: 25px 0;
  width: 100%;
  background: #21222a;
  height: 50px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.2;
      cursor: wait;
    `};
`;
