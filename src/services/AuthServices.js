import { loginIn,googleLogin,signup } from "../api/auth/authAPI";
import { setUserId, setUserLoggedIn, setUserRoles } from "../store/userSlice";

export default class AuthServices {

//==============================login functions=============================

  //this is subfunction for user login and google login
  userSave =async (status,data,error,dispatch)=>{
    if (status) {
      dispatch(setUserLoggedIn("NSSB"));
      dispatch(setUserId(data.userId));
      dispatch(setUserRoles(data.roles));
      return {status:status,data:data,error:error};
    } else {
      return {status:status,error:error};
    }
  }

  //this is user login function
  static handleLogin = async (credentials, dispatch) => {
    console.log("method invoked");
    const { status,data, error } = await loginIn(credentials);
    await this.userSave(status,data, error,dispatch);
  };

  //this is google login function
  static handleGoogleLogin = async (access,dispatch) => {
    console.log("method invoked google login");
    const { status,data, error } = await googleLogin(access);
    await this.userSave(status,data, error,dispatch);
  }

//==============================logout functions=============================

  //this is local logout function
  static handleLogout = async (dispatch) => {
    dispatch(setUserLoggedIn("SSNB"));
    dispatch(setUserId(""));
    dispatch(setUserRoles([]));
  };

  //todo: need to implement user logout function server side


//==============================signup functions=============================

  static handleSignup = async (data) =>{
    console.log(data);
    return await signup(data);
  }
}
