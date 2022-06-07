import { loginIn, logOut } from "../api/auth/authAPI";

export default class AuthServices {
      // credentials = {email:"supun97", password:"qweasdzxc"}// -input payload sample
  static handleLogin = async (credentials, dispatch,setUserLoggedIn) => {
    const { status,data, error } = await loginIn(credentials);
    if (status) {
      dispatch(setUserLoggedIn("NSSB"));
      return {status:status,data:data,error:error};
    } else {
      return {status:status,error:error};
    }
  };
  static handleLogout = async (setIsAuthenticated) => {
    const { status, error } = await logOut();
    console.log(error);
    if (status) {
      setIsAuthenticated(false);
    } else {
      alert(error);
    }
  };
}
