import styled from "styled-components";
import { devices } from "../../helpers/screens";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffc745;
  border: 2px solid #333;
  box-shadow: 0 8px 0 rgb(0 0 0 / 20%), inset 0 -5px 0 #d6a638,
    inset 0 5px 0 #ffd77a;
  padding: 10px;
  z-index: 3;
  margin: 15px;
  border-radius: 15px;

  @media (${devices.mobileL}) {
    width: 40%;
    justify-content: space-between;
    margin-bottom: 0px;
    margin: 5px;
    padding: 5px;
  }
`;

export const Tool = styled.div`
  position: relative;
  background: #d6a638;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  @media (${devices.mobileL}) {
    padding: 0px;
    margin: auto;
  }
`;

export const ToolImg = styled.img`
  width: 50px;

  @media (${devices.mobileL}) {
    width: 35px;
  }
`;

export const Quantity = styled.div`
  position: absolute;
  background: #96bf4e;
  top: 0;
  right: -15%;
  font-family: Luckiest Guy;
  color: white;
  padding: 5px;
  border-radius: 10px;

  @media (${devices.mobileL}) {
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const Space = styled.span`
  width: 15px;

  @media (${devices.mobileL}) {
    display: none;
  }
`;
