import styled from "styled-components";

export const Table = styled.div`
  margin-left: 10px;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & p {
    width: 100%;
  }

  & span {
    padding-right: 5px;
    margin-right: 5px;
  }
`;

export const Item = styled.div`
  width: 48%;
  display: flex;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const Functions = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;

  & button {
    margin-right: 10px;
    border: 2px solid #161d29;
    background-color: transparent;
    color: #161d29;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: white;
    }
    :active {
      background-color: gray;
    }
  }
`;
