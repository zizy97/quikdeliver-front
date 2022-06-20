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
import SendMail from "./pages/SendMail";



//Driver Dashboard
//import DriverDashboard from "./components/driver/DriverDashboard";
//import NewOrders from './components/driver/newrequests/NewOrders';
//import Offers from './components/driver/joboffer/Offers';
//import ProContent from './components/driver/inprocess/ProContent';
//import History from './components/driver/history/History';


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
    path: "sendmail",
    element: <SendMail/>,
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
    element:  isAuthenticated && roles.includes("ROLE_CUSTOMER") ? (
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
<<<<<<< HEAD
<<<<<<< HEAD
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
    path: "/driver",
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
      { path: "newrequests", element: <h1>This is space to News Requests</h1> },
      { path: "inprocess", element: <h1>This is space to Inprocess</h1> },
=======
    path: "/driver",
    element:<DriverDashboardLayout/> ,
    children: [
      { path: "", element: <DriverDashboard/> },
      { path: "newrequests", element: <NewOrders/> },
      { path: "inprocess", element: <ProContent/> },
      { path: "joboffers", element: <Offers/> },
      { path: "account", element: <Account/> },
      { path: "settings", element: <Settings/> },
      { path: "history", element: <History/> },
      { path: "notification", element: <h1>This is space to notification</h1> },
>>>>>>> 1cf89ca (driver components and routings)
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
=======
>>>>>>> 8d01fec (remove unnecessary components from driver)
    path: "/test",
    element: <TestCase/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

export default routes;
