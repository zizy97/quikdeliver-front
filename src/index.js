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
//==3rd party library==
import Scrollbar from "smooth-scrollbar";
//  Scrollbar.init(document.querySelector("#my-scrollbar"));

// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <AuthContextProvider> */}
          <ThemeProvider theme={theme}>
            <AppProvider>
              <CssBaseline />
              <App />
            </AppProvider>
          </ThemeProvider>
          {/* </AuthContextProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
