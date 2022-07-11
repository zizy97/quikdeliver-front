import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";


export default function App() {
  const location = useLocation();

  const isAuthenticated =
    useSelector((state) => state.user.iuli) === "NSSB" ? true : false;
  const roles = useSelector((state) => state.user.userRoles);
  const routing = useRoutes(routes(isAuthenticated, roles),);
  return (
    <>
      {routing}
    </>
  );
}
