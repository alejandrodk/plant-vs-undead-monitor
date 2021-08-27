import { useState, useEffect } from "react";
import Controller from "./api";
import { App as Appp, Container, InactiveFarm, Tree } from "./styles";

import Header from "./components/Header/Header";
import PlantsContainer from "./components/PlantsContainer/PlantsContainer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("appToken"));
  const [farmActive, setFarmActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(async () => await refreshData(), 60000 * 30);
    if (token && token.length > 200 && !farmActive) {
      (async function () {
        await refreshData();
      })();
    }

    return () => clearInterval(timer);
  }, [token]);

  async function refreshData() {
    const controller = new Controller(token);
    const res = await controller.farmStatus();

    if (res.status == 1) alert("Token invalido");

    localStorage.setItem("appToken", token);

    const { status } = res.data;

    if (status == 1) setFarmActive(true);

    if (farmActive && status == 0) setFarmActive(false);
  }

  return (
    <Appp className="App">
      <Header setToken={setToken} farmActive={farmActive} token={token} />
      <Container>
        {farmActive ? (
          <PlantsContainer token={token} />
        ) : (
          <InactiveFarm>
            <h1>Tu granja se encuentra inactiva para operar 😥</h1>
          </InactiveFarm>
        )}
        <Tree src="/tree.png" />
      </Container>
    </Appp>
  );
}

export default App;
