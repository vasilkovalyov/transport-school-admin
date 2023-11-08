import axios, { AxiosError } from 'axios';
import { getTokenFromLC } from '../utils/localStorage';
import AuthService from '../services/auth';
import { Dashboard } from '../constants/routes/dashboard';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_API_URL}/api/dashboard/`,
  withCredentials: true,
  method: 'get, post, put, delete, patch',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.interceptors.request.use((request) => {
  if (getTokenFromLC()) {
    request.headers.Authorization = `Bearer ${getTokenFromLC()}`;
  }
  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!getTokenFromLC()) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._retry
    ) {
      error.config._isRetry = true;
      axios.interceptors.response.eject;
      try {
        const authService = new AuthService();
        const response = await authService.refreshToken();
        const { token } = await response.data;
        localStorage.setItem('token', token);
        return api.request(originalRequest);
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.response?.data.message === 'Refresh token expired') {
            localStorage.removeItem('token');
            window.location.href = Dashboard.LOGIN;
          }
        }
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default api;
