export interface PaginationLinks {
  prev: string | null;
  next: string | null;
}

export interface MoneyObject {
  currencyCode: string;
  value: string;
  valueInBaseUnits: number;
}
