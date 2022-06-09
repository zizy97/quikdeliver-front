import axios from "axios";

const ipoAPIHostProd = "https://quikapp-back.herokuapp.com/api"; //for production
const ipoAPIHostDev = "https://quikapp-back.herokuapp.com/api"; // for development

const ipoAPIHost = process.env.NODE_ENV === "development" ? ipoAPIHostDev : ipoAPIHostProd;

const instance = axios.create({
    baseURL: ipoAPIHost
});

export default instance;