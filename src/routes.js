import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "../src/components/Dashboard-main";

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/admin",
    element: true ? (
      <Dashboard/>
    ) : (
      <Navigate to="/login" />
    ),
    children: [
      { path: "", element: <h1>Dashboard</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
