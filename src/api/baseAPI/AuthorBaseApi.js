/* eslint-disable eqeqeq */
import axios from "axios";
import { apiConfig } from "../../config";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
});

axiosClient.interceptors.request.use(async (config) => {
  // add token
  // TODO
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response != undefined && response.data != undefined) {
      // only get data
      return response.data;
    }
    return response;
  },
  async (error) => {
    // internal server
    if (error.response && error.response.status === 500) {
      window.location.href = "/auth/500";
    }

    // Handle errors
    throw error;
  }
);

export default axiosClient;
