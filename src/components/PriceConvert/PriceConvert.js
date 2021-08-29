import { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../data/AppContext";

import Controller from "../../api/api";
import { Container, Price, Img, Value } from "./PriceConvertStyles";

const PriceConvert = () => {
  const { t } = useTranslation();
  const { token, pvuUSD, setPvuUSD, pvuBNB, setPvuBNB } =
    useContext(AppContext);

  useEffect(() => {
    if (!pvuUSD && !pvuBNB) {
      (async function () {
        const controller = new Controller(token);
        try {
          const { price_usd, price_bnb } = (await controller.pvuPrice()) || {};

          if (price_usd && price_bnb) {
            setPvuUSD(price_usd);
            setPvuBNB(price_bnb);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [pvuUSD, pvuBNB]);

  return (
    <Container>
      <Price title="1 PVU">
        <Img src="pvu.svg" />
        <Value>1 PVU =</Value>
      </Price>
      <Price title={t("priceConvert.usd")}>
        <Img
          src="dollar.svg"
          style={{
            width: "15px",
          }}
        />
        <Value>{pvuUSD.toFixed(2)}</Value>
      </Price>
      <Price title={t("priceConvert.bnb")}>
        <Img src="bnb.svg" />
        <Value>{pvuBNB.toFixed(4)}</Value>
      </Price>
    </Container>
  );
};

export default PriceConvert;
