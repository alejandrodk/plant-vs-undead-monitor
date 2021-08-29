import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #161d29;
  padding: 10px;
  z-index: 3;
  margin: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 425px) {
    margin: 0px;
    width: 45%;
    margin: 5px;
  }
`;

export const Space = styled.span`
  width: 15px;
  display: none;
`