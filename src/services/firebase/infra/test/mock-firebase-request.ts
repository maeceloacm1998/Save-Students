/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import FirebaseRequest from "../usecases/firebase-request"

export const mockFirebaseRequest = (path:string) => {
  const request = new FirebaseRequest(path)
  
  const response = request.get();

  return response;
}