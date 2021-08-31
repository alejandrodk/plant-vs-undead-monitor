import { isAfter } from "date-fns";
import React, { useContext } from "react";
import { Trans, useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  function calculateTime(plant) {
    if (!plant) return 0;

    const current = new Date();
    const end = addHoursToDate(
      new Date(plant.startTime),
      plant.plant.farmConfig.hours
    );

    if (isAfter(current, end)) return t("plant.ready");

    return hoursDiff(end, current);
  }

  return (
    <Plant water={plant.needWater}>
      <PlantImageContainer>
        {plant.hasCrow && <CrowSVG src="/crow.png" />}
        <PlantSVG src={plant?.plant?.type == 1 ? "/sapling.svg" : "/mama.svg"} 
          style={plant?.plant?.type == 1 ? {width: "115px"} : {}}
        />
        <LandSVG
          src={plant?.needWater ? "/land_3d_need_water.svg" : "/land_3d.svg"}
        />
      </PlantImageContainer>
      <PlantDataContainer>
        <PlantDataWrapper>
          <PlantDataTitle>
            <Trans i18nKey="plant.created" />
          </PlantDataTitle>
          <PlantDataValue>{verboseDate(plant?.createdAt)}</PlantDataValue>
        </PlantDataWrapper>
        <PlantDataWrapper>
          <PlantDataTitle>
            <Trans i18nKey="plant.need-water" />
          </PlantDataTitle>
          <PlantDataValue>
            {plant?.needWater ? t("plant.yes") : t("plant.no")}
          </PlantDataValue>
        </PlantDataWrapper>
        <PlantDataWrapper>
          <PlantDataTitle>
            <Trans i18nKey="plant.has-crow" />
          </PlantDataTitle>
          <PlantDataValue>
            {plant?.hasCrow ? t("plant.yes") : t("plant.no")}
          </PlantDataValue>
        </PlantDataWrapper>
      </PlantDataContainer>
      <ActiveItemsWrapper>
        {plant?.activeTools.map((tool) => (
          <PlantActiveItem
            key={tool.id}
            type={tool.type}
            title={`${t("plant.finished")} ${getDateWithLocalOffset(
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
        <ProfitIcon
          src="/dollar.svg"
          style={{ width: "12px" }}
          title={t("plant.profit-dollar")}
        />
        <Profit title={t("plant.profit-dollar")}>
          {(plant && ((plant.rate.le / 100) * pvuUSD).toFixed(2)) || 0}
        </Profit>
        <Profit title={t("plant.time-to-harvest")}>
          🕕 {calculateTime(plant)}
        </Profit>
      </ProfitWrapper>
    </Plant>
  );
}

export default PlantComp;
