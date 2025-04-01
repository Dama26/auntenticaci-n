import axios from "axios";
import * as SecureStore from "expo-secure-store";


const getToken = async () => {
  try {
    console.log("TOKEN(api.js):")
    console.log(SecureStore.getItemAsync("session_token"));
    return await SecureStore.getItemAsync("session_token");
  } catch (error) {
    console.error("Error obteniendo el token:", error);
    return null;
  }
};


const api = axios.create({
  baseURL: "https://clear-sunfish-fairly.ngrok-free.app",
  timeout: 10000, 
});

// Interceptor para agregar el token en cada petición
api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      console.log("Token:", `${token}`);
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.log("Token expirado, redirigiendo a login...");
        await SecureStore.deleteItemAsync("token");
      }

      
      if (status === 500) {
        console.error("Error interno del servidor");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
