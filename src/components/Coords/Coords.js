import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../data/AppContext";
import { getCoordinates } from "../../helpers/coords";
import { Container, Wrapper, Item, Icon, Bar, Loading } from "./CoordsStyles";

function Coords() {
  const { token } = useContext(AppContext);
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (!coords) {
      setLoading(true);
      (async function () {
        try {
          setCoords(await getCoordinates(token));
        } catch (err) {
          console.error(err);
        }
        setLoading(false);
      })();
    }
  }, [coords]);

  return loading ? (
    <Loading>🕕 {t("coords.loading")}</Loading>
  ) : (
    <React.Fragment>
      <Container>
        ⚠ {t("coords.comment")}
      </Container>
      <Container>
      <span style={{ width: "100%" }}>
        <Wrapper style={{ width: "95%" }}>
          <Item>🌐 {t("coords.key-coord")}</Item>
          <Item>📍 {t("coords.key-position")}</Item>
          <Item>💧 {t("coords.key-water")}</Item>
          <Item>
            <Icon src="/crow.png" /> {t("coords.key-crow")}
          </Item>
        </Wrapper>
      </span>
      {coords &&
        coords.map((coord, ix) => (
          <Wrapper key={ix}>
            <Item>{`🌐 ${coord[0]} 📍 ${coord[1]}`}</Item>
            <Bar />
            <Item>
              💧
              {coord[2]}
            </Item>
            {coord[3] && (
              <Item>
                <Icon src="/crow.png" />
                {t("coords.has-crow")}
              </Item>
            )}
          </Wrapper>
        ))}
    </Container>
    </React.Fragment>
  );
}

export default Coords;
