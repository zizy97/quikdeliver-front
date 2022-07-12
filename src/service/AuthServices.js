import { loginIn, googleLogin, signup } from "../api/auth/authAPI";
import { setUserId, setUserLoggedIn, setUserRoles } from "../store/userSlice";

export default class AuthServices {
  //==============================login functions=============================

  //this is subfunction for user login and google login
  static userSave = async (status, data, dispatch) => {
    dispatch(setUserLoggedIn("NSSB"));
    dispatch(setUserId(data.userId));
    dispatch(setUserRoles(data.roles));
  };

  //this is user login function
  static handleLogin = async (credentials, dispatch) => {
    console.log("method invoked");
    const { status, data, error } = await loginIn(credentials);
    // console.log("error"+error)
    if (status) {
      await this.userSave(status, data, dispatch);
      return { status: status, data: data.roles };
    }
    return { status: status, error: error };
  };

  //this is google login function
  static handleGoogleLogin = async (access, dispatch) => {
    console.log("method invoked google login");
    const { status, data, error } = await googleLogin(access);
    if (status) {
      await this.userSave(status, data, dispatch);
      return { status: status, data: data.roles };
    }
    return { status: status, error: error };
  };

  //==============================logout functions=============================

  //this is local logout function
  static handleLogout = async (dispatch) => {
    console.log("logout")
    dispatch(setUserLoggedIn("SSNB"));
    dispatch(setUserId(""));
    dispatch(setUserRoles([]));
  };

  //todo: need to implement user logout function server side

  //==============================signup functions=============================

  static handleSignup = async (data) => {
    console.log(data);
    const result =await signup(data);
    return result;
  };
}
