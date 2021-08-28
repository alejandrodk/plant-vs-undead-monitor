import styled from "styled-components";
import { devices } from "../../helpers/screens";

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 60px;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background-color: #90d450;
  padding: 10px;
  z-index: 3;

  @media (${devices.mobileL}) {
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 0px auto;

  @media (${devices.mobileL}) {
    width: 75px;
  }
`;

export const Title = styled.h1`
  text-align: left;
  width: 15%;
  font-family: Luckiest Guy;
  color: #161d29;

  @media (${devices.mobileL}) {
    width: 70%;
    text-align: center;
    font-size: 25px;
    margin-right: 5%;
  }
`;

export const TokenWrapper = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #aafa5f;
  border-radius: 20px;
  font-weight: bold;
  color: #161d29;

  @media (${devices.mobileL}) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const TokenLabel = styled.span`
  @media (${devices.mobileL}) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const TokenInput = styled.input`
  width: 45%;
  border-radius: 10px;
  border: 3px solid white;
  padding: 5px;
  margin-left: 15px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  color: #161d29;

  @media (${devices.mobileL}) {
    width: 90%;
    margin: auto;
  }
`;

export const FarmSignal = styled.div`
  ${(props) => {
    const bg = props.active ? "#aafa5f" : "#fa6e5f";
    const bg2 = props.active ? "#90d450" : "#bf5449";
    const bg3 = props.active ? "#b8fa7a" : "#fc8d81";
    const color = props.active ? "#161d29" : "white";

    return `
      background: ${bg};
      border: 4px solid #333;
      box-shadow: 0 8px 0 rgb(0 0 0 / 20%), inset 0 -5px 0 ${bg2},
      inset 0 5px 0 ${bg3};
      border-radius: 36px;
      color: ${color};
    `;
  }}

  width: 20%;
  height: 30%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  font-family: Luckiest Guy;
  font-size: 20px;

  @media (${devices.mobileL}) {
    width: 70%;
    font-size: 15px;
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
