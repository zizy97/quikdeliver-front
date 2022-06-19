import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TestCase from "./test/TestCase";
import SignInSide from "./pages/Signin";
import NotFound from "./pages/404";



//Admin Dashboard 
import {DashboardLayout} from "../src/components/DashboardLayout"
import Dashboard from "./pages/admin/Dashboard";
import Drivers from "./pages/admin/Drivers";
import Vehicles from "./pages/admin/Vehicles";
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
      <DashboardLayout/>
    ) : (
      <Navigate to="/signin" />
    ),
    children: [
      { path: "", element: <Dashboard/>},
      { path: "vehicles", element: <Vehicles/>  },
      { path: "drivers", element: <Drivers/> },
      { path: "orders", element: <Account/> },
      { path: "deliver", element: <h1>This is space to new deliver</h1> },
      { path: "history", element: <h1>This is space to history</h1> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "settings", element: <Settings/>},
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element:  true ? (
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
    path: "/customer",
    element:  true ? (
      <DashboardLayout/>
    ) : (
      <Navigate to="/signin" />
    ),
    children: [
      { path: "", element: <Dashboard/> },
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
