import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // ====Indicator datails====
  const [indicator, setIndicator] = useState(10);

  return (
    <AppContext.Provider value={{ indicator, setIndicator }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
