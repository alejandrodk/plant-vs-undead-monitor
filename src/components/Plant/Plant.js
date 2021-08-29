import { getDateWithLocalOffset, verboseDate } from "../../helpers";

import {
  LandSVG,
  Plant,
  PlantDataContainer,
  PlantDataTitle,
  PlantDataValue,
  PlantDataWrapper,
  PlantImageContainer,
  PlantSVG,
  CrowSVG,
  ActiveItemsWrapper,
  PlantActiveItem,
  PlantActiveItemQuantity,
} from "./PlantStyles";

function PlantComp(props) {
  const { plant } = props;
  return (
    <Plant water={plant.needWater}>
      <PlantImageContainer>
        {plant.hasCrow && <CrowSVG src="/crow.png" />}
        <PlantSVG src={plant?.plant?.iconUrl} />
        <LandSVG
          src={plant?.needWater ? "/land_3d_need_water.svg" : "/land_3d.svg"}
        />
      </PlantImageContainer>
      <PlantDataContainer>
        <PlantDataWrapper>
          <PlantDataTitle>creada: </PlantDataTitle>
          <PlantDataValue>{verboseDate(plant?.createdAt)}</PlantDataValue>
        </PlantDataWrapper>
        <PlantDataWrapper>
          <PlantDataTitle>necesita agua?: </PlantDataTitle>
          <PlantDataValue>{plant?.needWater ? "si" : "no"}</PlantDataValue>
        </PlantDataWrapper>
        <PlantDataWrapper>
          <PlantDataTitle>espantar cuervo?: </PlantDataTitle>
          <PlantDataValue>{plant?.hasCrow ? "si" : "no"}</PlantDataValue>
        </PlantDataWrapper>
      </PlantDataContainer>
      <ActiveItemsWrapper>
        {plant?.activeTools.map((tool) => (
          <PlantActiveItem
            key={tool.id}
            type={tool.type}
            title={`finaliza el: ${getDateWithLocalOffset(
              new Date(tool.endTime)
            )}`}
          >
            <PlantActiveItemQuantity>{tool.count}</PlantActiveItemQuantity>
          </PlantActiveItem>
        ))}
      </ActiveItemsWrapper>
    </Plant>
  );
}

export default PlantComp;
