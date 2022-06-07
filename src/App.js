import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";


export default function App() {
  const roles = useSelector(state => state.user.userRoles);
  const isAuthenticated = useSelector(state => state.user.iuli) === "NSSB"?true:false;
  const routing = useRoutes(routes(isAuthenticated,roles));
  return <>{routing}</>;
}
