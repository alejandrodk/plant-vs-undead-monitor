import { useState, useEffect } from "react";

import Controller from "../../api";
import Seeds from "../Seeds/Seeds";
import Harvest from "../Harvest/Harvest";
import LEWallet from "../LEWallet/LEWallet";
import { Header, Space } from "./StatsHeaderStyles";

const HeaderComp = ({ token }) => {
  const [leWallet, setLeWallet] = useState(0);
  const [harvestable, setHarvestable] = useState(0);
  const [seedsMyFarmed, setSeedsMyFarmed] = useState(0);
  const [pvuMyFarmed, setPvuMyFarmed] = useState(0);
  const [sunFlower, setSunFlower] = useState(0);

  useEffect(() => {
    if (!leWallet) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.farmingStats();

        if (data) {
          setLeWallet(data.leWallet);
          setHarvestable(data.totalHarvestable);
          setSeedsMyFarmed(data.seedsMyFarmed);
          setPvuMyFarmed(data.pvuMyFarmed);
          setSunFlower(data.usagesSunflower);
        }
      })();
    }
  }, [leWallet]);

  return (
    <Header>
      <Seeds value={sunFlower} />
      <Space />
      <LEWallet value={leWallet} />
      <Space />
      <Harvest value={harvestable} />
    </Header>
  );
};

export default HeaderComp;
