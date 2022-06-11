import { loginIn,googleLogin } from "../api/auth/authAPI";
import { setUserId, setUserLoggedIn, setUserRoles } from "../store/userSlice";

export default class AuthServices {
      // credentials = {email:"supun97", password:"qweasdzxc"}// -input payload sample
  static handleLogin = async (credentials, dispatch) => {
    console.log("method invoked");
    const { status,data, error } = await loginIn(credentials);
    if (status) {
      dispatch(setUserLoggedIn("NSSB"));
      dispatch(setUserId(data.userId));
      dispatch(setUserRoles(data.roles));
      return {status:status,data:data,error:error};
    } else {
      return {status:status,error:error};
    }
  };
  static handleLogout = async (dispatch) => {
    dispatch(setUserLoggedIn("SSNB"));
    dispatch(setUserId(""));
    dispatch(setUserRoles([]));
  };
  static handleGoogleLogin = async (access,dispatch) => {
    console.log("method invoked google login");
    const { status,data, error } = await googleLogin(access);
    if (status) {
      dispatch(setUserLoggedIn("NSSB"));
      dispatch(setUserId(data.userId));
      dispatch(setUserRoles(data.roles));
      return {status:status,roles:data.roles,error:error};
    } else {
      return {status:status,error:error};
    }
  }
}
