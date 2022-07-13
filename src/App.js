import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import { useSelector } from "react-redux";
import AUTH from './utils/constants';//this is for temporary

// export default function App() {
//   const isAuthenticated = useSelector(state => state.user.iuli) === "NSSB"?true:false;
//   const roles=useSelector(state=>state.user.userRoles);
//   const routing = useRoutes(routes(isAuthenticated,roles));
//   return <>{routing}</>;
// }

export default function App() {
  const routing = useRoutes(routes(authStatus()));
  return (
    <>{routing}</>
  )
}

//temporary auth status manage by firebase
function authStatus() {
  let token = sessionStorage.getItem(AUTH.TOKEN);
  return token == null ? false : true;
}