import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import { Container, Header, Price, Img, Value } from "./ProfitStyles";

const Profit = () => {
  const { t } = useTranslation();
  const { currentLe, pvuUSD } = useContext(AppContext);

  return currentLe ? (
    <Container>
      <Header>{t("profit.title")}</Header>
      <Price title="PVU">
        <Img src="le.svg" />
        <Value>{currentLe} =</Value>
      </Price>
      <Price title="PVU">
        <Img src="pvu.svg" />
        <Value>{(currentLe / 100).toFixed(2)}</Value>
      </Price>
      <Price title={t("profit.usd-title")}>
        <Img
          src="dollar.svg"
          style={{
            width: "15px",
          }}
        />
        <Value>{((currentLe / 100) * pvuUSD).toFixed(2)}</Value>
      </Price>
    </Container>
  ) : (
    <React.Fragment />
  );
};

export default Profit;
