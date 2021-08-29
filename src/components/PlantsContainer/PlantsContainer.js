import React, { useEffect, useState, useContext } from "react";
import { Trans } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import Plant from "../Plant/Plant";

import { PlantsContainer, PlantsContainerTitle } from "./PlantsContainerStyles";

function PlantsContainerComp() {
  const { token } = useContext(AppContext);
  const [plants, setPlants] = useState(null);

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
      <PlantsContainerTitle>
        <Trans i18nKey="plantsContainer.title" />
      </PlantsContainerTitle>
      <PlantsContainer>
        {plants &&
          [
            ...plants.filter((plant) => plant.needWater == true),
            ...plants.filter((plant) => plant.needWater == false),
          ].map((plant, ix) => <Plant plant={plant} key={ix} />)}
      </PlantsContainer>
    </React.Fragment>
  );
}

export default PlantsContainerComp;
