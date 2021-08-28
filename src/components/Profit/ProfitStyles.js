import styled from "styled-components";

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
  padding: 10px;
  z-index: 3;
  margin: 15px;
  border-radius: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-weight: bold;
`;

export const Text = styled.span`
  font-size: 20px;
  cursor: pointer;
  background: #96e046;
  color: #161d29;
  padding: 5px;
  border-radius: 10px;
  margin: auto;
  margin-left: 10px;
  font-family: Luckiest Guy;
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
`;
