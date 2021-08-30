import styled from "styled-components";

export const DataBar = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 425px) {
    overflow-x: auto;
    padding: 5px;
    width: 98%;
  }
`;

export const InactiveFarm = styled.div`
  width: 50%;
  background-color: #fa6e5f;
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin: 50px auto;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const Logo = styled.img`
  width: 25%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 50%;
  margin: auto;

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const GroupLabel = styled.div`
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 2px solid white;
  background-color: #31353b2e;
  color: white;
`;

export const Tree = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -999;
  left: -100px;
  opacity: 1;
  position: fixed;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const UpdatedTimeWrapper = styled.div`
  position: fixed;
  bottom: 2%;
  left: 35%;
  width: 500px;
  height: 65px;
  background-image: url(/bar.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  z-index: 5;

  @media (max-width: 425px) {
    left: 0%;
    width: 100%;
  }
`;

export const UpdatedTime = styled.h3`
  color: white;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

export const UTCTime = styled.span`
  position: fixed;
  bottom: 2%;
  right: 5%;
  padding: 15px;
  background: #aafa5f;
  border: 4px solid #333;
  box-shadow: 0 8px 0 rgb(0 0 0 / 20%), inset 0 -5px 0 #90d450,
    inset 0 5px 0 #b8fa7a;
  border-radius: 15px;
  color: #161d29;
  font-family: Luckiest Guy;
  z-index: 5;
  margin: auto;

  @media (max-width: 425px) {
    display: none;
  }
`;
