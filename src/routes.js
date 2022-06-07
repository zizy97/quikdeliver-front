import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TestCase from "./test/TestCase";
import Dashboard from "../src/components/Dashboard-main";
import SignInSide from "../src/components/Signin";

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
    path: "/admin",
    element: isAuthenticated && roles.includes("ROLE_VO")  ? (
      <Dashboard/>
    ) : (
      <Navigate to="/login" />
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
    path: "/test",
    element: <TestCase/>
  }
];

export default routes;
