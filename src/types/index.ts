export * from './accounts';
export * from './transactions';
export * from './categories';
export * from './tags';
export * from './webhooks';
export * from './attachments';
export * from './shared';

export interface PingResponse {
  meta: {
    id: string;
    statusEmoji: string;
  };
}
