import { PaginationLinks } from './shared';

export interface ListAttachmentsParams {
  'page[size]'?: number;
}

export interface ListAttachmentsResponse {
  data: AttachmentResource[];
  links: PaginationLinks;
}

export interface GetAttachmentResponse {
  data: AttachmentResource;
}

export interface AttachmentResource {
  type: 'attachments';
  id: string;
  attributes: {
    createdAt: string | null;
    fileURL: string | null;
    fileURLExpiresAt: string;
    fileExtension: string | null;
    fileContentType: string | null;
  };
  relationships: {
    transaction: {
      data: {
        type: 'transactions';
        id: string;
      };
      links: {
        related: string;
      };
    };
  };
  links: {
    self: string;
  };
}
