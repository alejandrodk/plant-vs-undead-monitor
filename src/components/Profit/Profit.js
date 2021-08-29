import React, { useContext } from "react";
import { AppContext } from "../../data/AppContext";
import { Container, Header, Price, Img, Value } from "./ProfitStyles";

const Profit = () => {
  const { currentLe, pvuUSD } = useContext(AppContext);

  return (
    <Container>
      <Header>
        Ganancias:
      </Header>
      <Price title="PVU">
        <Img src="le.svg" />
        <Value>{currentLe} =</Value>
      </Price>
      <Price title="PVU">
        <Img src="pvu.svg" />
        <Value>{(currentLe / 100).toFixed(2)}</Value>
      </Price>
      <Price title="Ganancia en dólares">
        <Img
          src="dollar.svg"
          style={{
            width: "15px",
          }}
        />
        <Value>{((currentLe / 100) * pvuUSD).toFixed(2)}</Value>
      </Price>
    </Container>
  );
};

export default Profit;
