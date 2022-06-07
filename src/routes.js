import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CustomDrawer from "./components/CustomDrawer";
import TestCase from "./test/TestCase";

const routes = (isAuthenticated) => [
  {
    path: "",
    element: <Home/>,
  },
  {path: "test",element: <TestCase/>},
  {
    path: "admin",
    element: isAuthenticated?<CustomDrawer/>:<Navigate to="/"/>,
    children: [
      { path: "", element: <h1>This is space to new component</h1> },
      { path: "users", element: <h1>User List component</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
