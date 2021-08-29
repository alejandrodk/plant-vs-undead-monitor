import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import {
  DataBar,
  Container,
  InactiveFarm,
  Tree,
  UpdatedTimeWrapper,
  UpdatedTime,
  UTCTime,
} from "./MainStyles";
import Tutorial from "../Tutorial/Tutorial";
import Header from "../Header/Header";
import MyTools from "../MyTools/MyTools";
import StatsHeader from "../StatsHeader/StatsHeader";
import PriceConvert from "../PriceConvert/PriceConvert";
import Profit from "../Profit/Profit";
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import { getTime12HVerbose } from "../../helpers/time.helper";
import { format } from "date-fns";

function App() {
  const { token } = useContext(AppContext);
  const [farmActive, setFarmActive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [utcTime, setUtcTime] = useState(getTime12HVerbose(new Date()));
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const timer = setInterval(async () => await refreshData(), 60 * 1000 * 15);

    if (token && !farmActive) {
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

    const { status } = res.data;

    if (status == 1) setFarmActive(true);

    if (farmActive && status == 0) setFarmActive(false);

    setLastUpdated(new Date());
  }

  return (
    <React.Fragment>
      {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
      <Header farmActive={farmActive} setShowTutorial={setShowTutorial} />
      <DataBar>
        {farmActive && (
          <React.Fragment>
            <MyTools />
            <StatsHeader />
          </React.Fragment>
        )}
        <PriceConvert />
        {farmActive && <Profit />}
      </DataBar>
      <Container>
        {farmActive ? (
          <PlantsContainer />
        ) : token ? (
          <InactiveFarm>
            <h1>No puedes farmear en este momento ❌</h1>
            <p>
              no debes recargar la página, se actualiza automáticamente cada 15
              minutos. ⏰
            </p>
          </InactiveFarm>
        ) : (
          <InactiveFarm>
            <h1>Agrega un token válido</h1>
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
