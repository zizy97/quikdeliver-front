import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CustomDrawer from "./components/CustomDrawer";

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/admin",
    element: true ? (
      <CustomDrawer/>
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
