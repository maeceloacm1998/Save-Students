/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
import {faker} from '@faker-js/faker';

import FirebaseRequest from './firebase-client';
import {mockFirebaseRequest} from '../test';

import {StatusCodeResponse} from '../../data/models';

type SutTypes = {
  sut: FirebaseRequest;
};

const makeSut = (): SutTypes => {
  const sut = new FirebaseRequest();
  return {
    sut,
  };
};

describe('FirebaseCLient', () => {
  test('Deve chamar o firebase e devolver valores corretos', async () => {
    const path = faker.database.type();
    const requestFake = await mockFirebaseRequest(path);

    const {sut} = makeSut();

    const request = await sut.get(path);

    expect(requestFake).toEqual(request);
  });

  test('Deve chamar o firebase com path URL e retornar statusCode 500', async () => {
    const path = faker.internet.url();

    const {sut} = makeSut();

    const response = await sut.get(path);

    expect(response.statusCode).toBe(StatusCodeResponse.serverError);
  });
});
