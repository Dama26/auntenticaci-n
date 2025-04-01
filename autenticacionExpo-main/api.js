// api.js
import axios from 'axios';

// Crear una instancia de axios
const api = axios.create({
  baseURL: 'https://normal-tightly-shiner.ngrok-free.app/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

const isLoginRequest = (config) => {
  return config.url.includes('/auth'); 
};


api.interceptors.request.use(
  (config) => {
    if (!isLoginRequest(config)) {
      const token = 'tu_token_de_autenticacion'; 
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Error en la respuesta:', error.response);
      if (error.response.status === 401) {
        console.log('Token expirado o no autorizado');
      }
    } else if (error.request) {
      console.error('No hubo respuesta:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
