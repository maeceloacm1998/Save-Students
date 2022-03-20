import { FirebaseRequestResponse } from "../../data/models";

export type AuthenticationParams = {
  url: string;
}

export interface Authentication {
  get (params: AuthenticationParams): Promise<FirebaseRequestResponse>;
  // post (params: AuthenticationParams): Promise<any>;
}