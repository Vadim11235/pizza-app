import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const PrivateRoute = ({ redirectPath, ...routeProps }) => {
  const {authed} = useAuth()

  return authed ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};