import styled from "styled-components";
import { devices } from "../../helpers/screens";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: #161d29;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid #96e046;
  padding: 20px;
  z-index: 3;
  margin: 15px;
  border-radius: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;

  @media (${devices.mobileL}) {
    padding: 10px;
    margin: 5px;
    width: 100%;
  }
`;

export const Price = styled.div`
  position: relative;
  background: #161d29;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Img = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const Value = styled.span`
  font-family: Luckiest Guy;
  font-size: 25px;

  @media (${devices.mobileL}) {
    font-size: 15px;
  }
`;