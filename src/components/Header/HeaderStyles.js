import styled from "styled-components";

export const Header = styled.div`
position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 80px;
  justify-content: space-evenly;
  background-color: #90d450;
  padding: 20px;
  z-index: 3;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: left;
  width: 15%;
  font-family: Luckiest Guy;
  color: purple;
`;

export const TokenLabel = styled.label`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #aafa5f;
  border-radius: 20px;
  font-weight: bold;
`;

export const TokenInput = styled.input`
  width: 45%;
  border-radius: 10px;
  border: 3px solid white;
  padding: 5px;
  margin-left: 15px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const FarmSignal = styled.div`
  ${(props) => {
    const bg = props.active ? "#aafa5f" : "#fa6e5f";
    const bg2 = props.active ? "#90d450" : "#bf5449";
    const bg3 = props.active ? "#b8fa7a" : "#fc8d81";
    const color = props.active ? "black" : "white";

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
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-family: Luckiest Guy;
  font-size: 20px;
`;
