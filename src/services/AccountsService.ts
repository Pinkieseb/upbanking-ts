import { ApiClient } from '../utils/ApiClient';
import { ListAccountsParams, ListAccountsResponse, GetAccountResponse } from '../types/accounts';

export class AccountsService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListAccountsParams): Promise<ListAccountsResponse> {
    return this.apiClient.get<ListAccountsResponse>('/accounts', { params });
  }

  async get(accountId: string): Promise<GetAccountResponse> {
    return this.apiClient.get<GetAccountResponse>(`/accounts/${accountId}`);
  }
}
