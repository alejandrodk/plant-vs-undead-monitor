import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 25px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Luckiest Guy;
  font-size: 20px;
  margin-right: 10px;
  background: #507fcc;
  border: 4px solid #333;
  box-shadow: 0 8px 0 rgb(0 0 0 / 20%), inset 0 -5px 0 #436aab,
    inset 0 5px 0 #78acff;
  border-radius: 15px;
  color: white;

  @media (max-width: 425px) {
    margin-right: 0px;
    height: 20px;
    width: 40%;
    padding: 5px;
    font-size: 15px;
  }
`;

export const Logo = styled.img`
  @media (max-width: 425px) {
    width: 20px;
  }
`;
