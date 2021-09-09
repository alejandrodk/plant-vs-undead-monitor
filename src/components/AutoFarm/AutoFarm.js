import React, { useEffect, useState } from "react";
import { Table, Functions, Item } from "./AutoFarmStyle";
import { setAudio, checkAudio } from "../../helpers/utils";

function AutoFarm() {
  const [results, setResults] = useState(null);
  const [audio, setAudioValue] = useState(checkAudio());

  useEffect(() => {
    if (!results) {
      const data = localStorage.getItem("plant_update");

      if (data) setResults(JSON.parse(data));
    }
  }, [results]);

  useEffect(() => {
    setAudio(audio);
  }, [audio]);

  function clearHist() {
    localStorage.removeItem("plant_update");
    setResults(null);
  }

  return (
    <Table>
      <p>{`Herramientas aplicadas | actualizado: ${
        results?.lastUpdated || ""
      }`}</p>
      <Functions>
        <button onClick={clearHist}>Limpiar historial</button>
        <button onClick={() => setResults(null)}>Actualizar</button>
        <button onClick={() => setAudioValue(!audio)}>{`${
          !audio ? "Activar" : "Desactivar"
        } notificaciones`}</button>
      </Functions>
      {results?.updated?.map((item, ix) => (
        <Item key={ix}>
          <span>{`plant id: ${item.plant}`}</span>
          <span>{`tool: ${item.tool}`}</span>
          <span>{`date: ${item.time}`}</span>
          <pre>
            <code>{JSON.stringify(item.response)}</code>
          </pre>
        </Item>
      ))}
    </Table>
  );
}

export default AutoFarm;
