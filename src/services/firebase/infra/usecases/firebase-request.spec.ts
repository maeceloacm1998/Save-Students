/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
import { faker } from '@faker-js/faker';

import FirebaseRequest from "./firebase-request";
import { mockFirebaseRequest } from "../test";

import { StatusCodeResponse } from '../../data/models';

type SutTypes = {
  sut: FirebaseRequest,
}

const makeSut = (path:string): SutTypes => {
  const sut = new FirebaseRequest(path);
  return {
    sut
  }
}

describe('FirebaseRequest',() => {
  test('Deve chamar o firebase e devolver valores corretos', () => {
    const path = faker.database.type();
    const requestFake = mockFirebaseRequest(path)

    const {sut} = makeSut(path);

    const request = sut.get();

    expect(requestFake).toEqual(request);
  });

  test('Deve chamar o firebase com path URL e retornar statusCode 500', () => {
    const path = faker.internet.url();

    const {sut} = makeSut(path);

    const response = sut.get();

    expect(response.statusCode).toBe(StatusCodeResponse.serverError);
  });
});