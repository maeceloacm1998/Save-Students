import { FirebaseRequestResponse } from "../../data/models";

export interface Authentication {
  get (): Promise<FirebaseRequestResponse>;
  // post (params: AuthenticationParams): Promise<any>;
}