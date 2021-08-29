import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../data/AppContext";

import Controller from "../../api/api";
import { Container, Tool, ToolImg, Quantity, Space } from "./MyToolsStyles";

const HeaderComp = () => {
  const { token } = useContext(AppContext);
  const [tools, setTools] = useState(null);

  useEffect(() => {
    if (!tools && token) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.myTools();

        if (data) {
          setTools(data.filter(tool => tool.usages));
        }
      })();
    }
  }, [tools]);

  function getImage(type) {
    switch (type) {
      case "Small Pot":
        return "small_pot.png";
      case "Big Pot":
        return "big_pot.png";
      case "Water":
        return "water.png";
      case "Scarecrow":
        return "scare_crow.png";
      case "Greenhouse":
        return "green_house.png";
      default:
        return "favicon.svg";
    }
  }

  return (
    <Container>
      {tools &&
        tools.map((tool, ix) => (
          <React.Fragment key={ix}>
            <Tool key={ix}>
              <ToolImg src={getImage(tool.name)} alt={tool.name} />
              <Quantity>{tool.usages}</Quantity>
            </Tool>
            {ix < tools.length - 1 && <Space />}
          </React.Fragment>
        ))}
    </Container>
  );
};

export default HeaderComp;
