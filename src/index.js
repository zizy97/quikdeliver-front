import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
//import Addvehicle from "./components/Vehicleowner/Addvehicle";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
//import Dashboard from "../src/components/Dashboard-main";
// import reportWebVitals from './reportWebVitals';
import Home from "../src/pages/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Home />
        {/*<Dashboard />*/}
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
