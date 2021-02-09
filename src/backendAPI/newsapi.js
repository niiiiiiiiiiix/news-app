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
        apiKey: "23cf58c9a628462a916683f9cd1bcb19",
      },
    });
  },
};

export default backendAPI;
