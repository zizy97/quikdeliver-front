import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignInSide from "./pages/Signin";
import NotFound from "./pages/404";
import SendMail from "./pages/SendMail";

//Admin Dashboard
import PackageRequest from "./pages/admin/PackageRequest";
import PaymentProofUpload from './pages/admin/PaymentProofUpload';
import PackageDeliveryRequests from './pages/admin/PackageDeliveryRequests';
import DeliveryRequest from './pages/admin/DeliveryRequest';
import AddDriver from './pages/admin/AddDriver';
import AddVehicle from './pages/admin/AddVehicle';
import UpcomingDeliveries from './pages/admin/UpcomingDeliveries';
import OngoingDeliveries from './pages/admin/OngoingDeliveries';
import CompletedDeliveries from './pages/admin/CompletedDeliveries';
import RejectedDeliveries from './pages/admin/RejectedDeliveries';
import EditDriver from './pages/admin/EditDriver';
import EditVehicle from './pages/admin/EditVehicle';
import ExpiredDeliveries from './pages/admin/ExpiredDeliveries';
import TermsAndConditions from './components/package_delivery_requests/TermsAndConditions';
import Allocations from './pages/admin//Allocations';
import Reports from './pages/admin/Reports';



import { DashboardLayout } from "../src/components/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import Drivers from "./pages/admin/Drivers";
import Vehicles from "./pages/admin/Vehicles";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Contactus from "./pages/ContactUs";
import DefaultLayout from "./components/DefaultLayout";

//Driver Dashboard
import DriverDashboard from "./components/driver/DriverDashboard";
import NewOrders from './components/driver/newrequests/NewOrders';
import Offers from './components/driver/joboffer/Offers';
import ProContent from './components/driver/inprocess/ProContent';
import History from './components/driver/history/History';

//Customer Dashboard
import Customer from "./pages/customer/Customer";
import Customer2 from "./pages/customer/Customer2";
import Customer3 from "./pages/customer/Customer3";
import Map from "./pages/customer/Map";
import UnregisteredCustomerDetails from "./pages/customer/UnregisteredCustomer";
import Login from "./pages/admin/Login";

const routes = (isAuthenticated) => [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      { path: "",element: <Home />},
      { path: "/about",element: <About />,},
      { path: "/services",element: <Services />,},
      { path: "/contactus",element: <Contactus />,},
      { path: 'delivery', element: <PackageRequest /> },
      { path: 'terms', element: <TermsAndConditions /> },
      { path: 'payments/:requestId', element: <PaymentProofUpload /> },
    ],
  },
  { path: "login",element: <SignInSide />,},
  { path: "sendmail",element: <SendMail />,},
  { path: "signup",element: <Register />,},
  { path: "signin",element: <Login />,},
  { path: "new-booking",element: <Customer />,},
  { path: "page2",element: <Customer2 />},
  { path: "page3",element: <Map /> },

  {
    path: "/vo",
    element: true ? <DashboardLayout /> : <Navigate to="/signin" />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "drivers", element: <Drivers /> },
      { path: "orders", element: <Account /> },
      { path: "deliver", element: <h1>This is space to new deliver</h1> },
      { path: "history", element: <h1>This is space to history</h1> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/admin",
    element:
      isAuthenticated ? (
        <DashboardLayout />
      ) : (
        <Navigate to="/signin" />
      ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "vehicles", element: <Vehicles /> },
      { path: "drivers", element: <Drivers /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      { path: 'deliveries/ongoing', element: <OngoingDeliveries /> },
      { path: 'deliveries/upcoming', element: <UpcomingDeliveries /> },
      { path: 'deliveries/completed', element: <CompletedDeliveries /> },
      { path: 'deliveries/expired', element: <ExpiredDeliveries /> },
      { path: 'deliveries/rejected', element: <RejectedDeliveries /> },
      { path: 'allocations', element: <Allocations /> },
      { path: 'delivery/requests', element: <PackageDeliveryRequests /> },
      { path: 'delivery/requests/:id', element: <DeliveryRequest /> },
      { path: 'reports', element: <Reports /> },
      { path: 'drivers', element: <Drivers /> },
      { path: 'drivers/new', element: <AddDriver /> },
      { path: 'drivers/:id/edit', element: <EditDriver /> },
      { path: 'vehicles', element: <Vehicles /> },
      { path: 'vehicles/new', element: <AddVehicle /> },
      { path: 'vehicles/:id/edit', element: <EditVehicle /> },
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
    element:<DashboardLayout/> ,
    children: [
      { path: "", element: <DriverDashboard/> },
      { path: "newrequests", element: <NewOrders/> },
      { path: "inprocess", element: <ProContent/> },
      { path: "joboffers", element: <Offers/> },
      { path: "account", element: <Account/> },
      { path: "settings", element: <Settings/> },
      { path: "history", element: <History/> },
      { path: "notification", element: <h1>This is space to notification</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {path: "*",element: <NotFound />,},
];

export default routes;
