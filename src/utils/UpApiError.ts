interface ErrorResponse {
  status: string;
  title: string;
  detail: string;
  source?: {
    parameter?: string;
    pointer?: string;
  };
}

export class UpApiError extends Error {
  status: string;

  title: string;

  detail: string;

  source?: {
    parameter?: string;
    pointer?: string;
  };

  constructor(errorResponse: ErrorResponse) {
    super(errorResponse.detail);
    this.name = 'UpApiError';
    this.status = errorResponse.status;
    this.title = errorResponse.title;
    this.detail = errorResponse.detail;
    this.source = errorResponse.source;
  }
}
