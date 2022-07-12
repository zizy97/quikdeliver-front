import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TestCase from "./test/TestCase";
import SignInSide from "./pages/Signin";
import NotFound from "./pages/404";
import SendMail from "./pages/SendMail";

//Admin Dashboard
import { DashboardLayout } from "../src/components/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import Drivers from "./pages/admin/Drivers";
import Vehicles from "./pages/admin/Vehicles";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Contactus from "./pages/ContactUs";
import DefaultLayout from "./components/DefaultLayout";

//Driver Dashboard
import DriverDashboard from "./components/driver/DriverDashboard";
import NewOrders from "./components/driver/newrequests/NewOrders";
import Offers from "./components/driver/joboffer/Offers";
import ProContent from "./components/driver/inprocess/ProContent";
import History from "./components/driver/history/History";

//Customer Dashboard
import Customer from "./pages/customer/Customer";
import Customer2 from "./pages/customer/Customer2";
import Customer3 from "./pages/customer/Customer3";
import Map from "./pages/customer/Map";
import UnregisteredCustomerDetails from "./pages/customer/UnregisteredCustomer";

//vo Dashboard
import Dashboardvo from "./pages/vo/Dashboardvo";
import Accountvo from "./pages/vo/Accountvo";
import Newrequest from "./components/vo/Newrequest";
import Orderhistory from "./components/vo/Orderhistory";
import Inprocess from "./components/vo/Inprocess";
import Driversvo from "./pages/vo/Drivers";
import Vehiclesvo from "./pages/vo/Vehicles";
import Orderaccept from "./components/vo/Orderaccept/Orderaccept";
import Adddriver from "./components/vo/Adddriver/Adddriver_form";
import Editdriver from "./components/vo/Adddriver/Editdriver";
//import Addvehicle from "./components/vo/Addvehicle_form";
const routes = (isAuthenticated, roles) => [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
    ],
  },
  {
    path: "login",
    element: <SignInSide />,
  },
  {
    path: "sendmail",
    element: <SendMail />,
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
    path: "new-booking",
    element: <Customer />,
  },
  {
    path: "page2",
    element: <Customer2 />,
  },
  {
    path: "page3",
    element: <Map />,
  },
  {
    path: "orderchange",
    element: <Orderaccept />,
  },
  {
    path: "adddriverform",
    element: <Adddriver />,
  },
  {
    path: "editdriver",
    element: <Editdriver />,
  },
  {
    path: "/vo",
    element: true ? <DashboardLayout /> : <Navigate to="/signin" />,
    children: [
      { path: "", element: <Dashboardvo /> },
      { path: "requests", element: <Newrequest /> },
      { path: "inprocess", element: <Inprocess /> },
      { path: "vehicles", element: <Vehiclesvo /> },
      { path: "drivers", element: <Driversvo /> },
      { path: "account", element: <Accountvo /> },
      { path: "history", element: <Orderhistory /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element:
      isAuthenticated && roles.includes("ROLE_CUSTOMER") ? (
        <DashboardLayout />
      ) : (
        <Navigate to="/signin" />
      ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "drivers", element: <Drivers /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      { path: "history", element: <Customer3 /> },
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
      { path: "new-booking", element: <Customer /> },
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
    path: "/driver",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DriverDashboard /> },
      { path: "newrequests", element: <NewOrders /> },
      { path: "inprocess", element: <ProContent /> },
      { path: "joboffers", element: <Offers /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      { path: "history", element: <History /> },
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
