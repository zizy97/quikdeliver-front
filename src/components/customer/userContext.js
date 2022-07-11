import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // ====Indicator datails====
  const [indicator, setIndicator] = useState(10);

  // ====AppRating====
  const [appRating, setAppRating] = useState(false);

  //---framer-motion---
  const containerVarients = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        dumping: 8,
      },
    },
  };
  //---framer-motion---

  return (
    <AppContext.Provider
      value={{
        indicator,
        setIndicator,
        containerVarients,
        appRating,
        setAppRating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
