import axios from "../shared/axios";

export const getRequest = async (uri) => {
  try {
    let response = await axios.get(uri);
    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response : error,
    };
  }
};

export const putRequest = async (uri, data) => {
  try {
    let response = await axios.put(uri, data);

    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response : error,
    };
  }
};

export const deleteRequest = async (uri) => {
  try {
    let response = await axios.delete(uri);

    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response : error,
    };
  }
};

export const postRequest = async (uri, data) => {
  try {
    let response = await axios.post(uri, data);

    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response : error,
    };
  }
};

export const authRequest = async (config) => {
  try {
    let response = await axios(config);
    return {
      data: response,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response ? error.response : error,
    };
  }
};

export const getErrorMessage = (error) => {
  return error.data ? error.data.fieldsErrors?error.data.fieldsErrors[0].userMessage:error.data.error : error.message;
};
