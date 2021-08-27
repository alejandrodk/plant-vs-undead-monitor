import styled from "styled-components";

export const Plant = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 0 gray,
    inset 0 5px 0 white;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  padding-top: 100px;
`;

export const PlantImageContainer = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const PlantSVG = styled.img`
  width: 150px;
  position: absolute;
  top: -80px;
  left: 30px;
`;

export const LandSVG = styled.img`
  width: 200px;
`;

export const PlantDataContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const PlantDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

export const PlantDataTitle = styled.h3`
  font-size: 15px;
`;

export const PlantDataValue = styled.p`
  font-size: 15px;
  margin-left: 10px;
`;