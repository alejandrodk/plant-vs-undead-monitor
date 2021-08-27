import React, { useState, useEffect } from "react";
import Controller from "../../api";
import {
  Container,
  InactiveFarm,
  Tree,
  UpdatedTimeWrapper,
  UpdatedTime,
} from "./MainStyles";

import Header from "../Header/Header";
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import {
  getDateWithLocalOffset,
  getTime12HVerbose,
} from "../../helpers/time.helper";
import { format } from "date-fns";

function App() {
  const [token, setToken] = useState(localStorage.getItem("appToken"));
  const [farmActive, setFarmActive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(async () => await refreshData(), 60 * 1000 * 30);
    if (token && token.length > 200 && !farmActive) {
      (async function () {
        await refreshData();
      })();
    }

    return () => clearInterval(timer);
  }, [token]);

  async function refreshData() {
    const controller = new Controller(token);
    const res = await controller.farmStatus();

    if (res.status == 1) alert("Token invalido");

    localStorage.setItem("appToken", token);

    const { status } = res.data;

    if (status == 1) setFarmActive(true);

    if (farmActive && status == 0) setFarmActive(false);

    setLastUpdated(new Date());
  }

  return (
    <React.Fragment>
      <Header setToken={setToken} farmActive={farmActive} token={token} />
      <Container>
        {farmActive ? (
          <PlantsContainer token={token} />
        ) : (
          <InactiveFarm>
            <h1>Tu granja se encuentra inactiva para operar 😥</h1>
          </InactiveFarm>
        )}
        <Tree src="/tree.png" />
        <UpdatedTimeWrapper>
          <UpdatedTime>{`actualizado: ${format(
            lastUpdated,
            "h:mm aaa"
          )} | ${getTime12HVerbose(new Date())} UTC`}</UpdatedTime>
        </UpdatedTimeWrapper>
      </Container>
    </React.Fragment>
  );
}

export default App;
