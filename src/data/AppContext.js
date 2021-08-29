import React, { useState } from "react";

export const AppContext = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [currentLe, setCurrentLe] = useState(0);
  const [pvuUSD, setPvuUSD] = useState(0);
  const [pvuBNB, setPvuBNB] = useState(0);

  const context = {
    token,
    setToken,
    currentLe,
    setCurrentLe,
    pvuUSD,
    setPvuUSD,
    pvuBNB,
    setPvuBNB,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
