import React, { useEffect, useState, useContext } from "react";
import { Trans } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import Plant from "../Plant/Plant";

import { Section, SectionTitle } from "./PlantsContainerStyles";

function PlantsContainerComp() {
  const { token } = useContext(AppContext);
  const [plants, setPlants] = useState(null);
  const [togglePlants, setTogglePlants] = useState(true);

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
          setTogglePlants(true);
        }}
      >
        <Trans i18nKey="plantsContainer.title" />
      </SectionTitle>
      {togglePlants && (
        <Section>
          {plants &&
            [
              ...(plants?.filter((plant) => plant.needWater == true) || []),
              ...(plants?.filter((plant) => plant.needWater == false) || []),
            ].map((plant, ix) => <Plant plant={plant} key={ix} />)}
        </Section>
      )}
    </React.Fragment>
  );
}

export default PlantsContainerComp;
