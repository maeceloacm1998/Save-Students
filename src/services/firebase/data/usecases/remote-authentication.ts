/* eslint-disable no-fallthrough */
/* eslint-disable no-new */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
import { EmptyValueReturnError, ServerError } from '../../domain/errors';
import {
  Authentication,
} from '../../domain/usecases/authentication';
import FirebaseRequest from '../../infra/usecases/firebase-client';
import { FirebaseRequestResponse, StatusCodeResponse } from '../models';

export class RemoteAuthentication implements Authentication{
  constructor(private readonly path:string,private readonly firebaseClient: FirebaseRequest) {
    this.pathUrl = path;
  }

  public pathUrl:string;

  async get(): Promise<FirebaseRequestResponse> {
    const firebaseResponse = await this.firebaseClient.get(this.path);

    switch(firebaseResponse.statusCode){
      case StatusCodeResponse.ok: return firebaseResponse
      case StatusCodeResponse.notFound: throw new EmptyValueReturnError();
      case StatusCodeResponse.serverError: throw new ServerError();
      default:
        return {} as Promise<FirebaseRequestResponse>
    }
  }
}