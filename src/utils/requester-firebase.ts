/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {FirebaseRequestResponse} from '../services/firebase/data/models';
import {RemoteAuthentication} from '../services/firebase/data/usecases/remote-authentication';
import FirebaseCLient from '../services/firebase/infra/usecases/firebase-client';

type RequesterFirebaseType = {
  path: string;
  method: 'GET' | 'SET';
};

const selectedMethod = (request: RemoteAuthentication, method: string) => {
  switch (method) {
    case 'GET':
      return request.get();
    default:
      return request.get();
  }
};

export async function requesterFirebase({
  path,
  method,
}: RequesterFirebaseType): Promise<FirebaseRequestResponse> {
  const firebaseClient = new FirebaseCLient();
  const request = new RemoteAuthentication(path, firebaseClient);

  const response = await selectedMethod(request,method);

  return response;
}
