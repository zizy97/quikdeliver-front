import { Navigate } from "react-router-dom";
import CustomDrawer from "./components/CustomDrawer";

const routes = (isAuthenticated) => [
  {
    path: "/",
    element: <CustomDrawer />,
    children: [
      { path: "/", element: <h1>Home Page</h1> },
      { path: "/driver", element: <h1>Driver Page</h1> },
    ],
  },
  {
    path: "/admin",
    element: true ? (
      <h1>This is the template admin</h1>
    ) : (
      <Navigate to="/login" />
    ),
    children: [
      { path: "dashboard", element: "" },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <CustomDrawer />,
    children: [{ path: "/", element: <h1>Home Page</h1> }],
  },
];

export default routes;
