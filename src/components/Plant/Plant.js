import { isAfter } from "date-fns";
import React, { useContext } from "react";
import { AppContext } from "../../data/AppContext";
import {
  addHoursToDate,
  getDateWithLocalOffset,
  hoursDiff,
  verboseDate,
} from "../../helpers";

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
  Profit,
  ProfitIcon,
  ProfitWrapper,
} from "./PlantStyles";

function PlantComp(props) {
  const { plant } = props;
  const { pvuUSD } = useContext(AppContext);

  function calculateTime(plant) {
    if (!plant) return 0;

    const current = getDateWithLocalOffset(new Date());
    const end = addHoursToDate(
      new Date(plant.startTime),
      plant.plant.farmConfig.hours
    );

    if (isAfter(current, end)) return "LISTO!";

    return hoursDiff(current, end);
  }

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
      <ProfitWrapper>
        <ProfitIcon src="/le.svg" />
        <Profit>{plant?.rate.le || 0}</Profit>
        <ProfitIcon src="/dollar.svg" style={{ width: "12px" }} title="beneficio aproximado en USD al cosechar"/>
        <Profit title="beneficio aproximado en USD al cosechar">
          {(plant && ((plant.rate.le / 100) * pvuUSD).toFixed(2)) || 0}
        </Profit>
        <Profit title="tiempo restante para cosechar">🕕 {calculateTime(plant)}</Profit>
      </ProfitWrapper>
    </Plant>
  );
}

export default PlantComp;
