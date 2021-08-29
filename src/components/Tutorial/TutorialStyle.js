import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 86vw;
  height: 80vh;
  background-color: white;
  z-index: 99;
  border-radius: 20px;
  margin: 10px;
  padding: 15px;
  overflow: scroll;
  text-align: justify;
  font-size: 13px;

  & h3 {
    margin: 0px;
  }
`;

export const Toggle = styled.span`
  margin-left: 10px;
  background-color: #fa6e5f;
  border: solid 4px #161d29;
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 2.5px 7px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  z-index: 3;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
`;
