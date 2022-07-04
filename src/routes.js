import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TestCase from "./test/TestCase";
// import DashboardAdmin from "../src/components/Dashboard-main";
import SignInSide from "./pages/Signin";
import NotFound from "./pages/404";

//Admin Dashboard
import { DashboardLayout } from "../src/components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
//Customer
import Customer from "./pages/customer/Customer";
import Customer2 from "./pages/customer/Customer2";
import Customer3 from "./pages/customer/Customer3";
import Map from "./pages/customer/Map";
import UnregisteredCustomerDetails from "./pages/customer/UnregisteredCustomer";

const routes = (isAuthenticated, roles) => [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "login",
    element: <SignInSide />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "/admin",
    element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/signin" />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "drivers", element: <Drivers /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      { path: "history", element: <h1>This is space to history</h1> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/customer",
    element: true ? <DashboardLayout /> : <Navigate to="/signin" />,
    children: [
      { path: "", element: <h1>This is space to new component</h1> },
      // { path: "bookings", element: <h1>This is space to new Bookings</h1> },
      { path: "history", element: <Customer3 /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      {
        path: "UnregisteredCustomer",
        element: <UnregisteredCustomerDetails />,
      },
      { path: "page1", element: <Customer /> },
      { path: "page2", element: <Customer2 /> },
      { path: "page3", element: <Map /> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/vo",
    element: true ? <DashboardLayout /> : <Navigate to="/signin" />,
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
    path: "/test",
    element: <TestCase />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
