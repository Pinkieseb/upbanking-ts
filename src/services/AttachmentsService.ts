import { ApiClient } from '../utils/ApiClient';
import {
  ListAttachmentsParams,
  ListAttachmentsResponse,
  GetAttachmentResponse,
} from '../types/attachments';

export class AttachmentsService {
  constructor(private apiClient: ApiClient) {}

  async list(params?: ListAttachmentsParams): Promise<ListAttachmentsResponse> {
    return this.apiClient.get<ListAttachmentsResponse>('/attachments', { params });
  }

  async get(attachmentId: string): Promise<GetAttachmentResponse> {
    return this.apiClient.get<GetAttachmentResponse>(`/attachments/${attachmentId}`);
  }
}
