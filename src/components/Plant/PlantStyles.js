import styled from "styled-components";

export const Plant = styled.div`
  ${({ water, crow }) => {
    return water || crow ? `border: solid 3px red;` : "";
  }}
  background-color: #161d29;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2), inset 0 -5px 0 #2b4063,
    inset 0 5px 0 #2b4063;
  width: 18%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 15px;
  padding-top: 100px;
  position: relative;
  margin-right: 15px;
  margin-bottom: 15px;

  @media (max-width: 425px) {
    width: 100%;
    margin: auto;
  }
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

export const CrowSVG = styled.img`
  width: 50px;
  position: absolute;
  top: -30px;
  left: 10px;
  z-index: 99;
`;

export const PlantDataContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`;

export const PlantDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  height: 25%;
  margin-bottom: 5px;
`;

export const PlantDataTitle = styled.h3`
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin: 0px;
  margin-right: 10px;
`;

export const PlantDataValue = styled.p`
  font-size: 15px;
  margin-left: 10px;
  color: white;
  font-weight: 100;
  margin: 0px;
`;

export const ActiveItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PlantActiveItem = styled.div`
  ${(props) => {
    const image = props.type === "WATER" ? "water" : "small_pot";
    return `
      background-image: url(/${image}.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `;
  }}
  position: relative;
  width: 50px;
  height: 50px;
`;

export const PlantActiveItemQuantity = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  right: 0px;
  background-color: #c1344b;
  padding: 5px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

export const ProfitWrapper = styled.div`
  width: 100%;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

export const Profit = styled.span`
  font-family: Luckiest Guy;
  color: white;
  font-size: 18px;
  margin-right: 10px;
`;

export const ProfitIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
