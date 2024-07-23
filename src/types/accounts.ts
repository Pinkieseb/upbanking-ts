import { MoneyObject, PaginationLinks } from './shared';

export interface ListAccountsParams {
  'page[size]'?: number;
  'filter[accountType]'?: 'SAVER' | 'TRANSACTIONAL' | 'HOME_LOAN';
  'filter[ownershipType]'?: 'INDIVIDUAL' | 'JOINT';
}

export interface ListAccountsResponse {
  data: AccountResource[];
  links: PaginationLinks;
}

export interface GetAccountResponse {
  data: AccountResource;
}

export interface AccountResource {
  type: 'accounts';
  id: string;
  attributes: {
    displayName: string;
    accountType: 'SAVER' | 'TRANSACTIONAL' | 'HOME_LOAN';
    ownershipType: 'INDIVIDUAL' | 'JOINT';
    balance: MoneyObject;
    createdAt: string;
  };
  relationships: {
    transactions: {
      links: {
        related: string;
      };
    };
  };
  links: {
    self: string;
  };
}
