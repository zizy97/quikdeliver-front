import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
// import AuthContextProvider from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { AppProvider } from "./components/customer/userContext";

import { useLocation } from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

import { AnimatePresence } from "framer-motion"; //3rd party library

const root = ReactDOM.createRoot(document.getElementById("root"));
const RouteIdentifier = (props) => {
  const location = useLocation();
  return (
    <div location={location} key={location.key}>
      {props.children}
    </div>
  );
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AnimatePresence>
          <BrowserRouter>
            <RouteIdentifier>
              <ThemeProvider theme={theme}>
                <AppProvider>
                  <CssBaseline />
                  <App />
                </AppProvider>
              </ThemeProvider>
            </RouteIdentifier>
          </BrowserRouter>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
