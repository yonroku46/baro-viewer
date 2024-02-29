import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

interface ApiResponse {
  data: any
  error: any
}

const ApiInstance = axios.create()

ApiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
  
ApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const apiResponse = response.data
    if (apiResponse.error) {
      console.error(apiResponse.error)
    } else {
      return apiResponse
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default ApiInstance