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
        // 23cf58c9a628462a916683f9cd1bcb19
        // ccddbd47ccb846c7aee787d2c404f441
        // 486ec6ef7ca346e1b0e5c4c9bff5798e
      },
    });
  },
};

export default backendAPI;
