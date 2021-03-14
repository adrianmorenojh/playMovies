import styled from "styled-components";

export const Container = styled.div`
  // background: #4b5364;
  background: rgb(119, 125, 126);
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    background: none;
  }
`;
export const Div = styled.div`
  max-width: 100vw;
  height: calc(100vh - 60px - 50px - 60px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-height: 420px) {
    height: calc(100vh - 99px);
  }
`;
export const Image = styled.img`
  max-width: 600px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 0;
  @media (max-height: 480px) {
    max-width: 380px;
  }
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0px;
  box-sizing: border-box;
  padding: 0 10px;
  color: white;
`;
export const Title = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  text-align: center;
  max-width: 200px;
  padding: 5px 10px;
`;

export const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 5px;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  font-size: 16px;
  color: white;
  border-bottom: 0.5px solid #21222a;
  margin-bottom: 18px;
  background: rgb(213, 207, 213);
  color: #21222a;
`;
export const H1 = styled.h1`
  margin: 0px;
  font-size: 1.3em;
  text-align: center;
  color: white;
`;
export const Reproductor = styled.video`
  width: 100%;
  margin-bottom: 15px;
  margin: 10px 0 20px;
`;
export const P = styled.p`
  padding: 0 15px;
  color: white;
  font-size: 14px;
`;
export const InfoP = styled.p`
  display: flex;
`;
