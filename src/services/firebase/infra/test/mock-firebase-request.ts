/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import FirebaseClient from "../usecases/firebase-client"

export const mockFirebaseRequest = async (path:string) => {
  const request = new FirebaseClient()
  
  const response = await request.get(path);

  return response;
}