import { MoneyObject, PaginationLinks } from './shared';

export interface ListTransactionsParams {
  'page[size]'?: number;
  'filter[status]'?: 'HELD' | 'SETTLED';
  'filter[since]'?: string;
  'filter[until]'?: string;
  'filter[category]'?: string;
  'filter[tag]'?: string;
}

export interface ListTransactionsResponse {
  data: TransactionResource[];
  links: PaginationLinks;
}

export interface GetTransactionResponse {
  data: TransactionResource;
}

export interface TransactionResource {
  type: 'transactions';
  id: string;
  attributes: {
    status: 'HELD' | 'SETTLED';
    rawText: string | null;
    description: string;
    message: string | null;
    isCategorizable: boolean;
    holdInfo: HoldInfoObject | null;
    roundUp: RoundUpObject | null;
    cashback: CashbackObject | null;
    amount: MoneyObject;
    foreignAmount: MoneyObject | null;
    cardPurchaseMethod: CardPurchaseMethodObject | null;
    settledAt: string | null;
    createdAt: string;
    transactionType: string | null;
    note: NoteObject | null;
    performingCustomer: CustomerObject | null;
  };
  relationships: {
    account: {
      data: {
        type: 'accounts';
        id: string;
      };
      links: {
        related: string;
      };
    };
    transferAccount: {
      data: {
        type: 'accounts';
        id: string;
      } | null;
      links: {
        related: string;
      };
    };
    category: {
      data: {
        type: 'categories';
        id: string;
      } | null;
      links: {
        self: string;
        related: string;
      };
    };
    parentCategory: {
      data: {
        type: 'categories';
        id: string;
      } | null;
      links: {
        related: string;
      };
    };
    tags: {
      data: {
        type: 'tags';
        id: string;
      }[];
      links: {
        self: string;
      };
    };
    attachment: {
      data: {
        type: 'attachments';
        id: string;
      } | null;
      links: {
        related: string;
      };
    };
  };
  links: {
    self: string;
  };
}

export interface HoldInfoObject {
  amount: MoneyObject;
  foreignAmount: MoneyObject | null;
}

export interface RoundUpObject {
  amount: MoneyObject;
  boostPortion: MoneyObject | null;
}

export interface CashbackObject {
  description: string;
  amount: MoneyObject;
}

export interface CardPurchaseMethodObject {
  method: 'CARD_ON_FILE' | 'CONTACTLESS' | 'SWIPE' | 'CHIP' | 'MANUAL_ENTRY';
  cardNumberSuffix: string;
}

export interface NoteObject {
  text: string;
}

export interface CustomerObject {
  displayName: string;
}
