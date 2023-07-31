import axios from "axios";

const Axios = axios.create({
// baseURL: "http://localhost:3100/",
baseURL: "https://knowlib-backend.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
  withCredentials: true,

});

export default Axios;