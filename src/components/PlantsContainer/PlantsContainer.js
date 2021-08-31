import React, { useEffect, useState, useContext } from "react";
import { Trans } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import Plant from "../Plant/Plant";
import Coords from "../Coords/Coords";

import { Section, SectionTitle } from "./PlantsContainerStyles";

function PlantsContainerComp() {
  const { token } = useContext(AppContext);
  const [plants, setPlants] = useState(null);
  const [togglePlants, setTogglePlants] = useState(true);
  const [toggleCoords, setToggleCoords] = useState(false);

  useEffect(() => {
    if (!plants) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.myLand();

        setPlants(data);
      })();
    }
  }, [plants]);

  return (
    <React.Fragment>
      <SectionTitle
        onClick={() => {
          setToggleCoords(false);
          setTogglePlants(true);
        }}
      >
        <Trans i18nKey="plantsContainer.title" />
      </SectionTitle>
      <SectionTitle
        onClick={() => {
          setToggleCoords(true);
          setTogglePlants(false);
        }}
      >
        <Trans i18nKey="plantsContainer.title-coords" />
      </SectionTitle>
      {togglePlants && (
        <Section>
          {plants &&
            [
              ...plants.filter((plant) => plant.needWater == true),
              ...plants.filter((plant) => plant.needWater == false),
            ].map((plant, ix) => <Plant plant={plant} key={ix} />)}
        </Section>
      )}
      {toggleCoords && (
        <Section>
          <Coords />
        </Section>
      )}
    </React.Fragment>
  );
}

export default PlantsContainerComp;
