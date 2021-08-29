import React, { useEffect, useContext } from "react";
import { Trans } from "react-i18next";
import { AppContext } from "../../data/AppContext";

import {
  FarmSignal,
  Header,
  Logo,
  MonitorLogo,
  TokenInput,
  TokenWrapper,
  TokenLabel,
  QuestionSign,
} from "./HeaderStyles";

const HeaderComp = (props) => {
  const { token, setToken } = useContext(AppContext);
  const { farmActive, setShowTutorial } = props;

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("appToken"));
    } else {
      localStorage.setItem("appToken", token);
    }
  }, [token]);

  return (
    <Header>
      <Logo src="/Logo.png" />
      <MonitorLogo src="/pvu-monitor-logo.png" />
      <TokenWrapper>
        <TokenLabel>
          <Trans i18nKey="header.token-add" />
        </TokenLabel>
        <TokenInput
          type="text"
          value={token || ""}
          onChange={({ target }) => {
            target.value.length > 200 && setToken(target.value);
          }}
        />
        <QuestionSign onClick={() => setShowTutorial(true)}>?</QuestionSign>
      </TokenWrapper>
      <FarmSignal active={farmActive}>
        {token ? (
          farmActive ? (
            <Trans i18nKey="header.allow-farm" />
          ) : (
            <Trans i18nKey="header.deny-farm" />
          )
        ) : (
          <Trans i18nKey="header.invalid-token" />
        )}
      </FarmSignal>
    </Header>
  );
};

export default HeaderComp;
