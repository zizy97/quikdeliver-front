/* eslint-disable no-unused-vars */
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

import { GET_PACKAGE_REQUEST_URL } from "../../config/urls";

export const packageRequest = async (config) => {
  var config = {
    method: "get",
    url: GET_PACKAGE_REQUEST_URL,
    headers: {},
  };
  authRequest(config);
};
