import React, { useState, useEffect, useContext } from "react";
import { Trans, useTranslation } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api/api";
import {
  DataBar,
  Container,
  InactiveFarm,
  Logo,
  Tree,
  UpdatedTimeWrapper,
  UpdatedTime,
  UTCTime,
  GroupWrapper,
  GroupLabel,
} from "./MainStyles";
import Tutorial from "../Tutorial/Tutorial";
import Header from "../Header/Header";
import MyTools from "../MyTools/MyTools";
import StatsHeader from "../StatsHeader/StatsHeader";
import PriceConvert from "../PriceConvert/PriceConvert";
import Profit from "../Profit/Profit";
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import {
  getDateWithLocalOffset,
  getTime12HVerbose,
} from "../../helpers/time.helper";
import { format } from "date-fns";
import { differenceInMinutes } from "date-fns/esm";

function App() {
  const { t } = useTranslation();
  const { token } = useContext(AppContext);
  const [farmActive, setFarmActive] = useState(false);
  const [group, setGroup] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [utcTime, setUtcTime] = useState(getTime12HVerbose(new Date()));
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const timer = setInterval(async () => await refreshData(), 60 * 1000 * 5);

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

    if (status == 1) {
      setFarmActive(true);
    }

    if (farmActive && status == 0) setFarmActive(false);

    setGroup(res.data);
    setLastUpdated(new Date());
  }

  function getDifferenceInGroups(date) {
    const difference = differenceInMinutes(
      new Date(),
      new Date(date)
    );

    return difference < 60
      ? `${difference} ${t("main.group-minutes")}`
      : `${(difference / 60).toFixed(1)} ${t("main.group-hours")}`;
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
            <Logo src="pvu-monitor-logo-2.png" />
            <h3>
              <Trans i18nKey="main.deny-farm" />
            </h3>
            {group?.inGroup && (
              <GroupWrapper>
                <GroupLabel>{`${t("main.group-me")} ${
                  group?.inGroup
                }`}</GroupLabel>
                <GroupLabel>{`${t("main.group-current")} ${
                  group?.currentGroup
                }`}</GroupLabel>
                <GroupLabel>{`${t("main.group-next")} ${getDifferenceInGroups(
                  group?.nextGroup
                )}`}</GroupLabel>
              </GroupWrapper>
            )}
            <Trans i18nKey="main.page-update" />
          </InactiveFarm>
        ) : (
          <InactiveFarm>
            <h1>
              <Trans i18nKey="main.add-token" />
            </h1>
          </InactiveFarm>
        )}
        <Tree src="/tree.png" />
        <UpdatedTimeWrapper>
          <UpdatedTime>
            {
              <Trans
                i18nKey="main.updated"
                values={{
                  lastDate: format(lastUpdated, "h:mm aaa"),
                  currentDate: getTime12HVerbose(new Date(lastUpdated)),
                }}
              />
            }
          </UpdatedTime>
        </UpdatedTimeWrapper>
        <UTCTime>{t("main.time") + utcTime}</UTCTime>
      </Container>
    </React.Fragment>
  );
}

export default App;
