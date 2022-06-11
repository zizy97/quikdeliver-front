import { authRequest, getErrorMessage, postRequest,getRequest } from "../utils";
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
  ACCESS_URL,
  REFRESH_URL,
  GOOGLE_LOGIN_URL
} from "../../config/urls";

import qs from "qs";

var result = { status: false, error: null }; //global return default declared

export const loginIn = async (credentials) => {

  var data = qs.stringify({
    email: credentials.email,
    password: credentials.password,
  });//required data to send to server to login

  var config = {
    method: "post",
    url: LOGIN_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  await authRequest(config)
    .then(({ data, error }) => {
      if (!error) {
        const { access, refresh, userId,roles } = data.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        setUserId(userId);
        result = { status: true,data:{userId,roles}, error: null };
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  console.log(result);
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

export const googleLogin = async (access) => {
  var config = {
    method: "GET",
    url: GOOGLE_LOGIN_URL,
    headers:{
      Authorization: "Bearer " + access
    },
  };
  await authRequest(config)
    .then(({ data, error }) => {
      if (!error) {
        const { access, refresh, userId,roles } = data.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        setUserId(userId);
        result = { status: true,data:{userId,roles}, error: null };
      } else {
        result = { status: false, error: getErrorMessage(error) };
      }
    })
    return result;
}

export const isUser = async () => {
  var config = {
    method: "POST",
    url: ACCESS_URL,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };

  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, error: null };
        } else {
          result = { status: false, error: "Undefined Status Code" };
        }
      } else {
        if (error.status === 401) {
          // console.log("Access Token Expired")
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            result = await isUser();
          } else {
            result = { status: status, error: getErrorMessage(error) };
          }
        } else {
          result = { status: false, error: getErrorMessage(error) };
        }
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false, error: getErrorMessage(error) };
    });
  return result;
}; //must await for the result

// export const testing = async () => {
//   result = await logOut({ username: "supun97", password: "qweasdzxc" });
//   console.log(result);
// };
