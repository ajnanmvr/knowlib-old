import axios from "axios";

const Axios = axios.create({
// baseURL: "http://192.168.1.135:5000/api",
baseURL: "https://knowlib-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    Authorization:`${localStorage.getItem('token')}`
  },
  withCredentials: true,

});

export default Axios;