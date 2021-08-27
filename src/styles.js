import styled from "styled-components";

export const App = styled.div`
  background-image: url(/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

export const InactiveFarm = styled.div`
  width: 50%;
  background-color: #fa6e5f;
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin: 50px auto;
  text-align: center;
`;

export const Tree = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -999;
  left: -100px;
  opacity: 1;
  position: fixed;
`;
