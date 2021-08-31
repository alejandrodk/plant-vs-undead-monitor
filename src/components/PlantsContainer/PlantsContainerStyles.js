import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 15px;
  z-index: 5;
  margin-bottom: 5%;

  @media (max-width: 425px) {
    justify-content: center;
    padding: 5px;
    margin-bottom: 20%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 25px;
  font-weight: 300;
  background: #e9576f;
  border: 4px solid #333;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 0 #a64250,
    inset 0 5px 0 #ff719c;
  border-radius: 10px;
  padding: 15px;
  margin: 0px;
  color: white;
  font-family: Luckiest Guy;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 0px;
    font-size: 18px;
    margin-bottom: 5px;
  }
`;
