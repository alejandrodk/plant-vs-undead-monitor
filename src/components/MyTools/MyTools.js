import React, { useState, useEffect } from "react";

import Controller from "../../api";
import { Container, Tool, ToolImg, Quantity, Space } from "./MyToolsStyles";

const HeaderComp = ({ token }) => {
  const [tools, setTools] = useState(null);

  useEffect(() => {
    if (!tools) {
      (async function () {
        const controller = new Controller(token);
        const { data } = await controller.myTools();

        if (data) {
          setTools(data);
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
          <React.Fragment>
            <Tool>
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
