import {
  LandSVG,
  Plant,
  PlantDataContainer,
  PlantDataTitle,
  PlantDataValue,
  PlantDataWrapper,
  PlantImageContainer,
  PlantSVG,
} from "./PlantStyles";

function PlantComp(props) {
  const { plant } = props;
  return (
    <Plant>
      <PlantImageContainer>
        <PlantSVG src={plant?.plant?.iconUrl} />
        <LandSVG
          src={plant?.needWater ? "/land_3d_need_water.svg" : "/land_3d.svg"}
        />
      </PlantImageContainer>
      <PlantDataContainer>
        <PlantDataWrapper>
          <PlantDataTitle>creada: </PlantDataTitle>
          <PlantDataValue>{plant?.createdAt}</PlantDataValue>
        </PlantDataWrapper>
        <PlantDataWrapper>
          <PlantDataTitle>necesita agua?: </PlantDataTitle>
          <PlantDataValue>{plant?.needWater ? "si" : "no"}</PlantDataValue>
        </PlantDataWrapper>
      </PlantDataContainer>
    </Plant>
  );
}

export default PlantComp;
