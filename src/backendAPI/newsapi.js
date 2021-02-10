import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

const backendAPI = {
  headlines: (country, category) => {
    return axiosInstance.get("top-headlines", {
      params: {
        country,
        category,
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });
  },
};

export default backendAPI;
