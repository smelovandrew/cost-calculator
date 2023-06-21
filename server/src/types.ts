export interface SuccessfulResponse {
  status: 'success';
}

export interface FailedResponse {
  status: 'error';
  message: string;
}