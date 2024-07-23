import { PaginationLinks } from './shared';

export interface ListTagsParams {
  'page[size]'?: number;
}

export interface ListTagsResponse {
  data: TagResource[];
  links: PaginationLinks;
}

export interface TagResource {
  type: 'tags';
  id: string;
  relationships: {
    transactions: {
      links: {
        related: string;
      };
    };
  };
}

export interface TagInputResource {
  type: 'tags';
  id: string;
}
