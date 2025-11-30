import axios, { AxiosError, AxiosResponse } from 'axios';

/**
 * Type for API response data
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

/**
 * Type for API error
 */
export type ApiError = {
  message: string;
  status: number;
};

/**
 * Create an instance of axios with default settings
 */
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Handle API response
 * @param response - Axios response object
 * @returns ApiResponse<T>
 */
function handleResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  };
}

/**
 * Handle API error
 * @param error - Axios error object
 * @returns ApiError
 */
function handleError(error: AxiosError): ApiError {
  return {
    message: error.response?.data?.message || error.message,
    status: error.response?.status || 500,
  };
}

/**
 * Make a GET request
 * @param url - API endpoint
 * @returns Promise<ApiResponse<T> | ApiError>
 */
export async function getRequest<T>(url: string): Promise<ApiResponse<T> | ApiError> {
  try {
    const response = await apiClient.get<T>(url);
    return handleResponse(response);
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

/**
 * Make a POST request
 * @param url - API endpoint
 * @param data - Request payload
 * @returns Promise<ApiResponse<T> | ApiError>
 */
export async function postRequest<T>(url: string, data: unknown): Promise<ApiResponse<T> | ApiError> {
  try {
    const response = await apiClient.post<T>(url, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

/**
 * Make a PUT request
 * @param url - API endpoint
 * @param data - Request payload
 * @returns Promise<ApiResponse<T> | ApiError>
 */
export async function putRequest<T>(url: string, data: unknown): Promise<ApiResponse<T> | ApiError> {
  try {
    const response = await apiClient.put<T>(url, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

/**
 * Make a DELETE request
 * @param url - API endpoint
 * @returns Promise<ApiResponse<T> | ApiError>
 */
export async function deleteRequest<T>(url: string): Promise<ApiResponse<T> | ApiError> {
  try {
    const response = await apiClient.delete<T>(url);
    return handleResponse(response);
  } catch (error) {
    return handleError(error as AxiosError);
  }
}

export { apiClient };