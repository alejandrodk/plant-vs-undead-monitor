import React, { useState, useEffect } from "react";

import Controller from "../../api";
import { Container, Header, Text, Price, Img, Value } from "./ProfitStyles";

const Profit = ({ token }) => {
  const [usd, setUsd] = useState(0);
  const [bnb, setBnb] = useState(0);
  const [le, setLe] = useState(0);

  useEffect(() => {
    if (!usd && !bnb) {
      (async function () {
        const controller = new Controller(token);
        try {
          const { price_usd, price_bnb } = await controller.pvuPrice();
          const { data } = await controller.farmingStats();

          if (data) {
            setLe(data.leWallet);
          }

          if (price_usd && price_bnb) {
            setUsd(price_usd);
            setBnb(price_bnb);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [usd, bnb]);

  return (
    <Container>
      <Header>
        Ganancias:
      </Header>
      <Price title="PVU">
        <Img src="le.svg" />
        <Value>{le}</Value>
      </Price>
      <Price title="PVU">
        <Img src="pvu.svg" />
        <Value>{(le / 100).toFixed(2)}</Value>
      </Price>
      <Price title="Ganancia en dólares">
        <Img
          src="dollar.svg"
          style={{
            width: "15px",
          }}
        />
        <Value>{((le / 100) * usd).toFixed(2)}</Value>
      </Price>
    </Container>
  );
};

export default Profit;
