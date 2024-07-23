import { PaginationLinks } from './shared';

export interface ListWebhooksParams {
  'page[size]'?: number;
}

export interface ListWebhooksResponse {
  data: WebhookResource[];
  links: PaginationLinks;
}

export interface CreateWebhookResponse {
  data: WebhookResource;
}

export interface GetWebhookResponse {
  data: WebhookResource;
}

export interface WebhookResource {
  type: 'webhooks';
  id: string;
  attributes: {
    url: string;
    description: string | null;
    secretKey?: string;
    createdAt: string;
  };
  relationships: {
    logs: {
      links: {
        related: string;
      };
    };
  };
  links: {
    self: string;
  };
}

export interface WebhookInputResource {
  attributes: {
    url: string;
    description?: string | null;
  };
}

export interface PingWebhookResponse {
  data: WebhookEventResource;
}

export interface WebhookEventResource {
  type: 'webhook-events';
  id: string;
  attributes: {
    eventType: 'PING' | 'TRANSACTION_CREATED' | 'TRANSACTION_SETTLED' | 'TRANSACTION_DELETED';
    createdAt: string;
  };
  relationships: {
    webhook: {
      data: {
        type: 'webhooks';
        id: string;
      };
      links: {
        related: string;
      };
    };
    transaction?: {
      data: {
        type: 'transactions';
        id: string;
      };
      links: {
        related: string;
      };
    };
  };
}

export interface ListWebhookLogsParams {
  'page[size]'?: number;
}

export interface ListWebhookLogsResponse {
  data: WebhookDeliveryLogResource[];
  links: PaginationLinks;
}

export interface WebhookDeliveryLogResource {
  type: 'webhook-delivery-logs';
  id: string;
  attributes: {
    request: {
      body: string;
    };
    response: {
      statusCode: number;
      body: string;
    } | null;
    deliveryStatus: 'DELIVERED' | 'UNDELIVERABLE' | 'FAILED';
    createdAt: string;
  };
  relationships: {
    webhookEvent: {
      data: {
        type: 'webhook-events';
        id: string;
      };
    };
  };
}
