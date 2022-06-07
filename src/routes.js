import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CustomDrawer from "./components/CustomDrawer";
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
