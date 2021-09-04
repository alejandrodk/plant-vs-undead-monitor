import React, { useState, useEffect, useContext } from "react";
import { Trans, useTranslation } from "react-i18next";
import { format } from "date-fns";
import { differenceInMinutes } from "date-fns/esm";
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
  QuestionSign,
  Donate,
  DonateIcon,
} from "./MainStyles";
import Tutorial from "../Tutorial/Tutorial";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import MyTools from "../MyTools/MyTools";
import StatsHeader from "../StatsHeader/StatsHeader";
import PriceConvert from "../PriceConvert/PriceConvert";
import Profit from "../Profit/Profit";
import PlantsContainer from "../PlantsContainer/PlantsContainer";
import { getTime12HVerbose } from "../../helpers/time.helper";

function App() {
  const { t } = useTranslation();
  const { token } = useContext(AppContext);
  const [farmActive, setFarmActive] = useState(false);
  const [group, setGroup] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [utcTime, setUtcTime] = useState(getTime12HVerbose(new Date()));
  const [showTutorial, setShowTutorial] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

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
    const difference = differenceInMinutes(new Date(date), new Date());

    if (difference < 0) {
      return format(new Date(date), "dd/MM/yyyy HH:mm");
    }

    return difference < 60
      ? `${difference} ${t("main.group-minutes")}`
      : `${(difference / 60).toFixed(1)} ${t("main.group-hours")}`;
  }

  function copyToClipboard(text) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
        {showSteps && <Modal setShow={setShowSteps} />}
        {farmActive ? (
          <PlantsContainer />
        ) : token ? (
          <InactiveFarm>
            {/* <div
              style={{
                backgroundColor: "#ab473c",
                padding: "5px",
                borderRadius: "15px",
              }}
            >
              <h3>⚠</h3>
              <p>
                debido a nuevos cambios de seguridad en la plataforma de PVU,
                por el momento es necesario seguir los siguientes pasos para
                poder disfrutar de PVU Monitor. <br />
                <br />
                Click aquí para conocer los pasos: 👉
                <QuestionSign onClick={() => setShowSteps(true)}>
                  ?
                </QuestionSign>
              </p>
            </div> */}
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
                } / ${group?.totalGroup}`}</GroupLabel>
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
        <Donate>
          <h3>{t("main.donation-title")}</h3>
          <DonateIcon
            onClick={() => {
              copyToClipboard("0x4fadffe72b191f081886b68485cf69be807a216b");
              alert("Wallet USDT red ERC20 Copiado! ❤");
            }}
            src="/usdt.svg"
            title="Copiar Wallet USDT red ERC20"
          />
          <DonateIcon
            onClick={() => {
              copyToClipboard("0x4fadffe72b191f081886b68485cf69be807a216b");
              alert("Wallet BNB red BSC Copiado! ❤");
            }}
            src="/bnb.svg"
            title="Copiar Wallet BNB red BSC"
          />
          <DonateIcon
            onClick={() => {
              copyToClipboard("0xD71ED67Ba0C78a5559a8a258A2BB355813AE105e");
              alert("Wallet PVU red BSC Copiado! ❤");
            }}
            src="/pvu.svg"
            title="Copiar Wallet PVU red BSC"
          />
        </Donate>
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
