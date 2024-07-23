# Up Banking SDK

A TypeScript SDK for easy integration with the Up Banking API. This SDK provides a simple and intuitive interface to access Up's financial services, including account management, transaction tracking, and more.

## Installation

```bash
npm install upbanking-ts
```

## Quick Start

```typescript
import { UpBankingSDK } from 'upbanking-ts';

const upSdk = new UpBankingSDK('YOUR_API_KEY');

// List all accounts
const accounts = await upSdk.accounts.list();
console.log(accounts);
```

## API Documentation

### Accounts

#### List Accounts

Retrieves a list of all accounts.

```typescript
const accounts = await upSdk.accounts.list(params?: ListAccountsParams);
```

Parameters:
- `params` (optional): An object containing filter and pagination options.
  - `page[size]`: Number of results per page.
  - `filter[accountType]`: Filter by account type ('SAVER', 'TRANSACTIONAL', or 'HOME_LOAN').
  - `filter[ownershipType]`: Filter by ownership type ('INDIVIDUAL' or 'JOINT').

#### Get Account

Retrieves details of a specific account.

```typescript
const account = await upSdk.accounts.get(accountId: string);
```

### Transactions

#### List Transactions

Retrieves a list of all transactions.

```typescript
const transactions = await upSdk.transactions.list(params?: ListTransactionsParams);
```

Parameters:
- `params` (optional): An object containing filter and pagination options.
  - `page[size]`: Number of results per page.
  - `filter[status]`: Filter by status ('HELD' or 'SETTLED').
  - `filter[since]`: Filter transactions after this date.
  - `filter[until]`: Filter transactions before this date.
  - `filter[category]`: Filter by category ID.
  - `filter[tag]`: Filter by tag.

#### Get Transaction

Retrieves details of a specific transaction.

```typescript
const transaction = await upSdk.transactions.get(transactionId: string);
```

#### List Transactions for Account

Retrieves transactions for a specific account.

```typescript
const transactions = await upSdk.transactions.listForAccount(accountId: string, params?: ListTransactionsParams);
```

#### Add Tags to Transaction

Adds tags to a transaction.

```typescript
await upSdk.transactions.addTags(transactionId: string, tags: TagInputResource[]);
```

#### Remove Tags from Transaction

Removes tags from a transaction.

```typescript
await upSdk.transactions.removeTags(transactionId: string, tags: TagInputResource[]);
```

#### Categorize Transaction

Categorizes a transaction.

```typescript
await upSdk.transactions.categorizeTransaction(transactionId: string, categoryId: string | null);
```

### Categories

#### List Categories

Retrieves a list of all categories.

```typescript
const categories = await upSdk.categories.list(params?: ListCategoriesParams);
```

#### Get Category

Retrieves details of a specific category.

```typescript
const category = await upSdk.categories.get(categoryId: string);
```

### Tags

#### List Tags

Retrieves a list of all tags.

```typescript
const tags = await upSdk.tags.list(params?: ListTagsParams);
```

### Webhooks

#### List Webhooks

Retrieves a list of all webhooks.

```typescript
const webhooks = await upSdk.webhooks.list(params?: ListWebhooksParams);
```

#### Create Webhook

Creates a new webhook.

```typescript
const webhook = await upSdk.webhooks.create(webhook: WebhookInputResource);
```

#### Get Webhook

Retrieves details of a specific webhook.

```typescript
const webhook = await upSdk.webhooks.get(webhookId: string);
```

#### Delete Webhook

Deletes a webhook.

```typescript
await upSdk.webhooks.delete(webhookId: string);
```

#### Ping Webhook

Pings a webhook.

```typescript
const response = await upSdk.webhooks.ping(webhookId: string);
```

#### List Webhook Logs

Retrieves logs for a specific webhook.

```typescript
const logs = await upSdk.webhooks.listLogs(webhookId: string, params?: ListWebhookLogsParams);
```

### Attachments

#### List Attachments

Retrieves a list of all attachments.

```typescript
const attachments = await upSdk.attachments.list(params?: ListAttachmentsParams);
```

#### Get Attachment

Retrieves details of a specific attachment.

```typescript
const attachment = await upSdk.attachments.get(attachmentId: string);
```

### Utility

#### Ping

Pings the Up Banking API.

```typescript
const response = await upSdk.ping();
```

## Error Handling

The SDK uses a custom `UpApiError` class for error handling:

```typescript
try {
  const account = await upSdk.accounts.get('non-existent-id');
} catch (error) {
  if (error instanceof UpApiError) {
    console.error(`API Error: ${error.status} - ${error.title}`);
    console.error(`Details: ${error.detail}`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
```

## Pagination

For endpoints that return paginated results, you can specify pagination parameters in the `params` object:

```typescript
const transactions = await upSdk.transactions.list({
  'page[size]': 50,
});
```

## Rate Limiting

The SDK automatically handles rate limiting. You can monitor rate limit warnings:

```typescript
upSdk.on('rateLimitWarning', (remainingRequests) => {
  console.warn(`Rate limit warning: ${remainingRequests} requests remaining`);
});
```

For more detailed information about the Up Banking API, please refer to the [official Up API documentation](https://developer.up.com.au/).
This readme may or may not have being generated with ChatGPT.