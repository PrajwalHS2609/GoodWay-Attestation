import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "https://goodwayattestation.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
