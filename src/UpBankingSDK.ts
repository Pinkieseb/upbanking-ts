import dotenv from 'dotenv';
import { ApiClient } from './utils/ApiClient';
import { AccountsService } from './services/AccountsService';
import { TransactionsService } from './services/TransactionsService';
import { CategoriesService } from './services/CategoriesService';
import { TagsService } from './services/TagsService';
import { WebhooksService } from './services/WebhooksService';
import { AttachmentsService } from './services/AttachmentsService';
import { PingResponse } from './types';

dotenv.config();

export class UpBankingSDK {
  private apiClient: ApiClient;

  public accounts: AccountsService;

  public transactions: TransactionsService;

  public categories: CategoriesService;

  public tags: TagsService;

  public webhooks: WebhooksService;

  public attachments: AttachmentsService;

  constructor(accessToken?: string) {
    const token = accessToken || process.env.UP_API_KEY;
    if (!token) {
      throw new Error(
        'No access token provided. Please provide a token or set the UP_API_KEY environment variable.',
      );
    }

    this.apiClient = new ApiClient(token);

    this.accounts = new AccountsService(this.apiClient);
    this.transactions = new TransactionsService(this.apiClient);
    this.categories = new CategoriesService(this.apiClient);
    this.tags = new TagsService(this.apiClient);
    this.webhooks = new WebhooksService(this.apiClient);
    this.attachments = new AttachmentsService(this.apiClient);
  }

  async ping(): Promise<PingResponse> {
    return this.apiClient.get<PingResponse>('/util/ping');
  }
}
