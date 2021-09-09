import React, { useEffect, useState, useContext } from "react";
import { Trans } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import Plant from "../Plant/Plant";
import { checkPlantsStatus } from "../../helpers/toolsHelpers";
import { getQueryParam } from "../../helpers/utils";
import { Section, SectionTitle } from "./PlantsContainerStyles";
import AutoFarm from '../AutoFarm/AutoFarm';

function PlantsContainerComp() {
  const { token } = useContext(AppContext);
  const [plants, setPlants] = useState(null);
  const [togglePlants, setTogglePlants] = useState(true);
  const [toggleBot, setToggleBot] = useState(false);

  useEffect(() => {
    const timer = setInterval(async () => setPlants(null), 60 * 1000 * 20);

    if (!plants) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.myLand();

        setPlants(data);
        checkPlantsStatus(data, token);
      })();
    }

    return () => clearInterval(timer);
  }, [plants]);

  return (
    <React.Fragment>
      <SectionTitle
        onClick={() => {
          setTogglePlants(true);
          setToggleBot(false);
        }}
      >
        <Trans i18nKey="plantsContainer.title" />
      </SectionTitle>
      {getQueryParam("bot") && (
        <SectionTitle
          onClick={() => {
            setTogglePlants(false);
            setToggleBot(true);
          }}
        >
          Bot
        </SectionTitle>
      )}
      {togglePlants && (
        <Section>
          {plants &&
            [
              ...(plants?.filter((plant) => plant.needWater || plant.hasCrow) ||
                []),
              ...(plants?.filter(
                (plant) => !plant.needWater && !plant.hasCrow
              ) || []),
            ].map((plant, ix) => <Plant plant={plant} key={ix} />)}
        </Section>
      )}
      {
        toggleBot && (
          <Section>
            <AutoFarm />
          </Section>
        )
      }
    </React.Fragment>
  );
}

export default PlantsContainerComp;
