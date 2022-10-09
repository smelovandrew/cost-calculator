export const API_HOST = "http://localhost:5000/api";

export enum ResponseStatuses {
  error = "error",
  success = "success",
}

export interface SuccessResponse {
  status: ResponseStatuses.success;
}

export interface FailureResponse {
  status: ResponseStatuses.error;
  message: string;
  errors?: Array<Omit<FailureResponse, "errors">>;
}

type FetchResponse<T extends SuccessResponse> = (T | FailureResponse) & {
  statusCode: number;
};

const getResponseJson = async <T extends SuccessResponse>(
  response: Response
): Promise<T | FailureResponse> => {
  try {
    return await response.json();
  } catch (e) {
    const error = e as Error;

    return {
      status: ResponseStatuses.error,
      message: response.statusText ?? error.message,
    };
  }
};

export const fetchJson = async <T extends SuccessResponse>(
  input: RequestInfo,
  init?: RequestInit
): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(input, {
      method: "GET",
      ...init,
      headers: {
        ...init?.headers,
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    const responseBody = await getResponseJson<T>(response);

    return { statusCode: response.status, ...responseBody };
  } catch (e) {
    const error = e as Error;

    return {
      statusCode: 400,
      status: ResponseStatuses.error,
      message: error.message,
    };
  }
};
