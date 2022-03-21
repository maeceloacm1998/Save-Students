/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import {child, get, ref} from 'firebase/database';
import {FirebaseRequestResponse} from '../../data/models';
import database from '../../config/firebase';

class FirebaseCLient {
  async get(path: string): Promise<FirebaseRequestResponse> {
    let response = {} as FirebaseRequestResponse;

    try {
      const reference = ref(database);
      await get(child(reference, path)).then(snapshot => {
        if (!snapshot.exists()) {
          throw new Error('notFound');
        }

        response = {
          statusCode: 200,
          body: snapshot.val(),
        };
      });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'notFound')
          return {
            statusCode: 404,
          };

        return {
          statusCode: 500,
        };
      }

      return {
        statusCode: 500,
      };
    }
    return response;
  }
}

export default FirebaseCLient;
