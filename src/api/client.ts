import axios from 'axios'

// Create axios instance - base URL will be set dynamically
export function createApiClient(baseUrl: string) {
  const client = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Add request interceptor to include auth token
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return client
}

// API types
export interface LoginRequest {
  username: string
  password: string
}

export interface User {
  id: number
  username: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface ErrorResponse {
  error: {
    code: string
    message: string
  }
}

// API functions
export async function login(
  client: ReturnType<typeof createApiClient>,
  credentials: LoginRequest
): Promise<LoginResponse> {
  const response = await client.post<LoginResponse>('/auth/login', credentials)
  return response.data
}
