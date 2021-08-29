import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../data/AppContext";
import Controller from "../../api";
import Seeds from "../Seeds/Seeds";
import Harvest from "../Harvest/Harvest";
import LEWallet from "../LEWallet/LEWallet";
import { Header, Space } from "./StatsHeaderStyles";

const HeaderComp = () => {
  const { token, currentLe, setCurrentLe } = useContext(AppContext);
  const [harvestable, setHarvestable] = useState(0);
  const [seedsMyFarmed, setSeedsMyFarmed] = useState(0);
  const [pvuMyFarmed, setPvuMyFarmed] = useState(0);
  const [sunFlower, setSunFlower] = useState(0);

  useEffect(() => {
    if (
      !currentLe &&
      !harvestable &&
      !seedsMyFarmed &&
      !pvuMyFarmed &&
      !sunFlower
    ) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.farmingStats();

        if (data) {
          setCurrentLe(data.leWallet);
          setHarvestable(data.totalHarvestable);
          setSeedsMyFarmed(data.seedsMyFarmed);
          setPvuMyFarmed(data.pvuMyFarmed);
          setSunFlower(data.usagesSunflower);
        }
      })();
    }
  }, [currentLe, harvestable, seedsMyFarmed, pvuMyFarmed, sunFlower]);

  return (
    <Header>
      <Seeds value={sunFlower} />
      <Space />
      <LEWallet value={currentLe} />
      <Space />
      <Harvest value={harvestable} />
    </Header>
  );
};

export default HeaderComp;
