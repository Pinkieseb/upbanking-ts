import { ApiClient } from '../utils/ApiClient';
import {
  ListCategoriesParams,
  ListCategoriesResponse,
  GetCategoryResponse,
} from '../types/categories';

export class CategoriesService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListCategoriesParams): Promise<ListCategoriesResponse> {
    return this.apiClient.get<ListCategoriesResponse>('/categories', { params });
  }

  async get(categoryId: string): Promise<GetCategoryResponse> {
    return this.apiClient.get<GetCategoryResponse>(`/categories/${categoryId}`);
  }
}
