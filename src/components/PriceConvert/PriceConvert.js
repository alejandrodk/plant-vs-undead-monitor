import React, { useState, useEffect } from "react";

import Controller from "../../api";
import { Container, Price, Img, Value } from "./PriceConvertStyles";

const PriceConvert = ({ token }) => {
  const [usd, setUsd] = useState(0);
  const [bnb, setBnb] = useState(0);

  useEffect(() => {
    if (!usd && !bnb) {
      (async function () {
        const controller = new Controller(token);
        const { price_usd, price_bnb } = await controller.pvuPrice();

        if (price_usd && price_bnb) {
          setUsd(price_usd);
          setBnb(price_bnb);
        }
      })();
    }
  }, [usd, bnb]);

  return (
    <Container>
      <Img src="pvu.svg" />
      Cotización PVU
      <Price title="Precio en dólares">
        <Img src="dollar.svg" style={{
          width: '15px'
        }}/>
        <Value>{usd.toFixed(2)}</Value>
      </Price>
      <Price title="Precio en BNB">
        <Img src="bnb.svg" />
        <Value>{bnb.toFixed(4)}</Value>
      </Price>
    </Container>
  );
};

export default PriceConvert;
