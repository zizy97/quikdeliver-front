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
  if(error.data){
    console.log("in error.data")
    if(error.data.commonError){
      console.log("in error.data.commonError")
      return error.data.commonError.cause;
    }else if(error.data.fieldsErrors){
      console.log("in error.data.fieldsErrors")
      return error.data.fieldsErrors[0].userMessage;
    }else{
      return error.data.error;
    }
  }
  console.log("in error default")
  return error.message;
};
