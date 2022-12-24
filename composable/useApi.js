import axios, { AxiosInstance } from 'axios'
import { useUserSession } from '~/composable/userSession';

const baseUrl = 'http://localhost:5063/';
//const baseUrl = 'http://37.148.209.136:5000';

let api;

export function createApi() {
  // Here we set the base URL for all requests made to the api
  api = axios.create({
    baseURL: baseUrl,
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config) => {
    const userSession = useUserSession()

    if (userSession.isLoggedIn) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${userSession.token}`,
      }
    }

    return config
  })

  return api
}

export function getApiBaseUrl() {
  return baseUrl
}

export function useApi() {
  if (!api) {
    createApi()
  }
  return api
}
