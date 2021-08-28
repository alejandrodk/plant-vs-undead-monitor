import React, { useState, useEffect } from "react";
import Controller from "../../api";
import {
  DataBar,
  Container,
  InactiveFarm,
  Tree,
  UpdatedTimeWrapper,
  UpdatedTime,
  UTCTime,
} from "./MainStyles";

import Header from "../Header/Header";
import MyTools from "../MyTools/MyTools";
import StatsHeader from "../StatsHeader/StatsHeader";
import PriceConvert from "../PriceConvert/PriceConvert";
import Profit from "../Profit/Profit";
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import { getTime12HVerbose } from "../../helpers/time.helper";
import { format } from "date-fns";

function App() {
  const [token, setToken] = useState(localStorage.getItem("appToken"));
  const [farmActive, setFarmActive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [utcTime, setUtcTime] = useState(getTime12HVerbose(new Date()));

  useEffect(() => {
    const timer = setInterval(async () => await refreshData(), 60 * 1000 * 15);
    if (token && token.length > 200 && !farmActive) {
      (async function () {
        await refreshData();
      })();
    }

    return () => clearInterval(timer);
  }, [token, farmActive]);

  useEffect(() => {
    const time = setInterval(() => {
      setUtcTime(getTime12HVerbose(new Date()));
    }, 60000);

    return () => clearInterval(time);
  }, []);

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
      <DataBar>
        {farmActive && (
          <React.Fragment>
            <MyTools token={token} />
            <StatsHeader token={token} />
          </React.Fragment>
        )}
        <PriceConvert token={token} />
        {farmActive && <Profit token={token} />}
      </DataBar>
      <Container>
        {farmActive ? (
          <PlantsContainer token={token} />
        ) : (
          <InactiveFarm>
            <h1>No puedes farmear en este momento ❌</h1>
            <p>
              no debes recargar la página, se actualiza automáticamente cada 15
              minutos. ⏰
            </p>
          </InactiveFarm>
        )}
        <Tree src="/tree.png" />
        <UpdatedTimeWrapper>
          <UpdatedTime>{`actualizado: ${format(
            lastUpdated,
            "h:mm aaa"
          )} | ${getTime12HVerbose(new Date(lastUpdated))} UTC`}</UpdatedTime>
        </UpdatedTimeWrapper>
        <UTCTime>{"🕕 Hora UTC " + utcTime}</UTCTime>
      </Container>
    </React.Fragment>
  );
}

export default App;
