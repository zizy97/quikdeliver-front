import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const routing = useRoutes(routes(true));
  return <>{routing}</>;
}
