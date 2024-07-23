import { ApiClient } from '../utils/ApiClient';
import {
  ListWebhooksParams,
  ListWebhooksResponse,
  CreateWebhookResponse,
  GetWebhookResponse,
  WebhookInputResource,
  PingWebhookResponse,
  ListWebhookLogsParams,
  ListWebhookLogsResponse,
} from '../types/webhooks';

export class WebhooksService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListWebhooksParams): Promise<ListWebhooksResponse> {
    return this.apiClient.get<ListWebhooksResponse>('/webhooks', { params });
  }

  async create(webhook: WebhookInputResource): Promise<CreateWebhookResponse> {
    return this.apiClient.post<CreateWebhookResponse>('/webhooks', { data: webhook });
  }

  async get(webhookId: string): Promise<GetWebhookResponse> {
    return this.apiClient.get<GetWebhookResponse>(`/webhooks/${webhookId}`);
  }

  async delete(webhookId: string): Promise<void> {
    await this.apiClient.delete(`/webhooks/${webhookId}`);
  }

  async ping(webhookId: string): Promise<PingWebhookResponse> {
    return this.apiClient.post<PingWebhookResponse>(`/webhooks/${webhookId}/ping`);
  }

  async listLogs(
    webhookId: string,
    params?: ListWebhookLogsParams,
  ): Promise<ListWebhookLogsResponse> {
    return this.apiClient.get<ListWebhookLogsResponse>(`/webhooks/${webhookId}/logs`, { params });
  }
}
