import axios from "axios";

const baseURL = (import.meta.env.VITE_API_URL || "http://localhost:8000/api").replace(
  /\/+$/,
  "",
);

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

let accessToken = null;
let refreshPromise = null;

export function setAccessToken(token) {
  accessToken = token;
}

export function clearAccessToken() {
  accessToken = null;
}

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

async function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = axios
      .post(
        `${baseURL}/auth/refresh`,
        {},
        { withCredentials: true },
      )
      .then(({ data }) => {
        setAccessToken(data.access_token);
        return data.access_token;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401 || !originalRequest || originalRequest.skipAuthRefresh) {
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      clearAccessToken();
      if (window.location.pathname !== "/admin/login") {
        window.location.assign("/admin/login");
      }
      return Promise.reject(error);
    }

    originalRequest._retry = true;
    try {
      const token = await refreshAccessToken();
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return api(originalRequest);
    } catch (refreshError) {
      clearAccessToken();
      if (window.location.pathname !== "/admin/login") {
        window.location.assign("/admin/login");
      }
      return Promise.reject(refreshError);
    }
  },
);
