import React, { useEffect, useState } from "react";
import Controller from "../../api";
import Plant from "../Plant/Plant";

import { PlantsContainer, PlantsContainerTitle } from "./PlantsContainerStyles";

function PlantsContainerComp(props) {
  const [plants, setPlants] = useState(null);
  const { token } = props;

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
      <PlantsContainerTitle>Mi granja</PlantsContainerTitle>
      <PlantsContainer>
        {plants && plants.map((plant, ix) => <Plant plant={plant} key={ix} />)}
      </PlantsContainer>
    </React.Fragment>
  );
}

export default PlantsContainerComp;
