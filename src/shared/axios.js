import axios from "axios";

const ipoAPIHostProd = "https://quik-back.herokuapp.com/api"; //for production
const ipoAPIHostDev = "https://quik-back.herokuapp.com/api"; // for development
// const ipoAPIHostDev = "http://localhost:8081/api"; // for development

const ipoAPIHost = process.env.NODE_ENV === "development" ? ipoAPIHostDev : ipoAPIHostProd;

const instance = axios.create({
    baseURL: ipoAPIHost
});

export default instance;