import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { UpApiError } from './UpApiError';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(accessToken: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.up.com.au/api/v1',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  private async request<T, D = unknown>(
    method: Method,
    url: string,
    config?: AxiosRequestConfig,
    data?: D,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request({
        method,
        url,
        ...config,
        data,
      });
      this.handleRateLimit(response.headers);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new UpApiError(error.response.data);
      }
      throw error;
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>('get', url, config);
  }

  async post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T, D>('post', url, config, data);
  }

  async patch<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T, D>('patch', url, config, data);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>('delete', url, config);
  }

  private handleRateLimit(headers: Record<string, unknown>): void {
    const remainingRequests = headers['x-ratelimit-remaining'];
    if (remainingRequests !== undefined) {
      console.warn(`Remaining API requests: ${remainingRequests}`);
    }
  }
}
