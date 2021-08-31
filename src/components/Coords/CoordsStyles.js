import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  padding: 10px;
  background-color: #ffffff87;
  border-radius: 10px;
  border: 4px solid #333;
`;

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 18%;
  justify-content: space-evenly;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    width: 43%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  //font-family: Luckiest Guy;
  color: #161d29;
  font-size: 15px;
`;

export const Icon = styled.img`
  width: 20px;
  margin: 0;
  margin-right: 5px;
`;

export const Bar = styled.span`
  width: 100%;
  display: block;
  border-bottom: 1px solid gray;
  margin: 5px 0px;
`;

export const Loading = styled.div`
  padding: 15px;
  background-color: white;
  border-radius: 15px;
  border: 4px solid #333;
`;