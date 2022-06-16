import {
  authRequest,
  getErrorMessage,
  postRequest,
  getRequest,
} from "../utils";
import {
  getAccessToken,
  setAccessToken,
  getUserId,
  setRefreshToken,
  setUserId,
  refreshAccessToken,
} from "./tokensAPI";
import {
  LOGIN_URL,
  LOGOUT_URL,
  SIGNUP_URL,
  REFRESH_URL,
  GOOGLE_LOGIN_URL,
} from "../../config/urls";

import qs from "qs";
import { da } from "date-fns/locale";

var result = { status: false, error: null }; //global return default declared

//login user and verify google login
export const loginIn = async (credentials) => {
  var data = qs.stringify({
    email: credentials.email,
    password: credentials.password,
  }); //required data to send to server to login

  var config = {
    method: "post",
    url: LOGIN_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  return await verifyUser(config);
};

export const googleLogin = async (access) => {
  var config = {
    method: "GET",
    url: GOOGLE_LOGIN_URL,
    headers: {
      Authorization: "Bearer " + access,
    },
  };
  return await verifyUser(config);
};

const verifyUser = async (config) => {
  await authRequest(config)
    .then(({ data, error }) => {
      if (!error) {
        const { access, refresh, userId, roles } = data.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        setUserId(userId);
        result = { status: true, data: { userId, roles }, error: null };
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};

export const logOut = async () => {
  const userId = getUserId("userid");
  var config = {
    method: "POST",
    url: LOGOUT_URL + `/${userId}`,
  };
  await authRequest(config)
    .then(({ data, error }) => {
      // console.log("error " + error);
      console.log("data " + data);
      if (!error && data.status === 200) {
        console.log("logged out");
        setAccessToken(null);
        setRefreshToken(null);
        setUserId(null);
        result = { status: true, error: null };
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};

//signup function

export const signup = async (data) => {
  console.log("signup function triggered")
  var out = JSON.stringify({
    email: data.email,
    password: data.password,
    name: data.name,
  });

  var config = {
    method: "POST",
    url: SIGNUP_URL + data.type,
    headers: {
      "Content-Type": "application/json",
    },
    data: out,
  };
  await authRequest(config)
    .then(({ data, error }) => {
      if (!error) {
        if(data.status === 201){
          const { id, name, email } = data.data;
          console.log("id -"+id+" name -"+name+" email -"+email);
          result = { status: true, error: null };
        }
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
};
