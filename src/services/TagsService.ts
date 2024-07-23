import { ApiClient } from '../utils/ApiClient';
import { ListTagsParams, ListTagsResponse } from '../types/tags';

export class TagsService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListTagsParams): Promise<ListTagsResponse> {
    return this.apiClient.get<ListTagsResponse>('/tags', { params });
  }
}
