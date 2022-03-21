/* eslint-disable no-shadow */
export enum StatusCodeResponse {
  ok = 200,
  notFound = 404,
  serverError = 500,
}

export type FirebaseRequestResponse = {
  statusCode: StatusCodeResponse;
  body?: any;
}