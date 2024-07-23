import { ApiClient } from '../utils/ApiClient';
import {
  ListTransactionsParams,
  ListTransactionsResponse,
  GetTransactionResponse,
} from '../types/transactions';
import { TagInputResource } from '../types/tags';

export class TransactionsService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListTransactionsParams): Promise<ListTransactionsResponse> {
    return this.apiClient.get<ListTransactionsResponse>('/transactions', { params });
  }

  async get(transactionId: string): Promise<GetTransactionResponse> {
    return this.apiClient.get<GetTransactionResponse>(`/transactions/${transactionId}`);
  }

  async listForAccount(
    accountId: string,
    params?: ListTransactionsParams,
  ): Promise<ListTransactionsResponse> {
    return this.apiClient.get<ListTransactionsResponse>(`/accounts/${accountId}/transactions`, {
      params,
    });
  }

  async addTags(transactionId: string, tags: TagInputResource[]): Promise<void> {
    await this.apiClient.post(`/transactions/${transactionId}/relationships/tags`, { data: tags });
  }

  async removeTags(transactionId: string, tags: TagInputResource[]): Promise<void> {
    await this.apiClient.delete(`/transactions/${transactionId}/relationships/tags`, {
      data: { data: tags },
    });
  }

  async categorizeTransaction(transactionId: string, categoryId: string | null): Promise<void> {
    const data = categoryId ? { data: { type: 'categories', id: categoryId } } : { data: null };
    await this.apiClient.patch(`/transactions/${transactionId}/relationships/category`, data);
  }
}
