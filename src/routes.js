import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TestCase from "./test/TestCase";
import DashboardAdmin from "../src/components/Dashboard-main";
import SignInSide from "./pages/Signin";
import NotFound from "./pages/404";

//Admin Dashboard 
import {DashboardLayout} from "../src/components/DashboardLayout"
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";

const routes = (isAuthenticated,roles) => [
  {
    path: "",
    element:<Home/> ,
  },
  {
    path: "login",
    element: <SignInSide/>,
  },
  {
    path: "signup",
    element: <Register/>,
  },
  {
    path: "signin",
    element: <Login/>,
  },
  {
    path: "/vo",
    element: true  ? (
      <DashboardAdmin/>
    ) : (
      <Navigate to="/signin" />
    ),
    children: [
      { path: "", element: <h1>This is space to new component</h1> },
      { path: "vehicles", element: <h1>This is space to new vehicles</h1> },
      { path: "drivers", element: <h1>This is space to new drivers</h1> },
      { path: "orders", element: <h1>This is space to new orders</h1> },
      { path: "deliver", element: <h1>This is space to new deliver</h1> },
      { path: "history", element: <h1>This is space to history</h1> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element:  isAuthenticated ? (
      <DashboardLayout/>
    ) : (
      <Navigate to="/signin" />
    ),
    children: [
      { path: "", element: <Dashboard/> },
      { path: "vehicles", element: <Vehicles/> },
      { path: "drivers", element: <Drivers/> },
      { path: "account", element: <Account/> },
      { path: "settings", element: <Settings/> },
      { path: "history", element: <h1>This is space to history</h1> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/test",
    element: <TestCase/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

export default routes;
