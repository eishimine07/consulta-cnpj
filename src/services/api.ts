import axios, { AxiosError, HttpStatusCode } from 'axios'

// Doc - https://brasilapi.com.br/docs
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const getErrorResponse = (error: unknown): { error?: string; status: HttpStatusCode } => {
  if (axios.isAxiosError(error)) {
    const axiosError  = error as AxiosError<{ message?: string; errors?: { message: string }[] }>
    const status = axiosError.response?.status ?? HttpStatusCode.InternalServerError

    if (axiosError.response?.data?.message) {
      return {
        error: axiosError.response.data.message,
        status,
      };
    }
    
    if (axiosError.response?.data?.errors) {
      return {
        error: axiosError.response.data.errors.map((err) => err.message)[0],
        status,
      };
    }
    
    return { status };
  }

  return { status: HttpStatusCode.InternalServerError };
}

export default api