import {onValue, ref} from 'firebase/database';
import {FirebaseRequestResponse} from '../../data/models';
import database from '../../config/firebase';

class FirebaseRequest {
  constructor(private readonly path: string) {
    this.url = path;
  }

  public url: string;

  get(): FirebaseRequestResponse {
    let response = {} as FirebaseRequestResponse;
    try {
      const path = ref(database, this.url);
      onValue(path, snapshot => {
        if (!snapshot.exists()) {
          throw new Error('Path não existe no firebase.');
        }

        response = {
          statusCode: 200,
          body: snapshot.val(),
        };
      });
    } catch (err) {
      if (err instanceof Error) {
        response = {
          statusCode: 404,
          body: err.message,
        };
      }

      return {
        statusCode: 500,
        body: 'Formato do Path incorreto',
      };
    }
    return response;
  }
}

export default FirebaseRequest;
