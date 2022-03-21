/* eslint-disable import/no-extraneous-dependencies */
import faker from "@faker-js/faker";
import { EmptyValueReturnError, ServerError } from "../../domain/errors";

import FirebaseCLient from "../../infra/usecases/firebase-client";
import { RemoteAuthentication } from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
}

const makeSut = (path:string = faker.database.type()): SutTypes => {
  const firebaseClient = new FirebaseCLient();
  const sut = new RemoteAuthentication(path,firebaseClient);

  return {
    sut
  }
}

describe('RemoteAuthentication', () => {
  test('Deve mostrar se o path passado corresponde ao procurado pela requisição', async () => {
    const path = faker.database.type();
    const {sut} = makeSut(path)

    expect(sut.pathUrl).toBe(path);
  });

  test('Deve retornar o statusCode 200 passando o path correto', async () => {
    const path = "types/period";

    const {sut} = makeSut(path);

    const result = await sut.get();

    expect(result.statusCode).toBe(200);
  });

  test('Deve error 404 quando retornar valor vazio', async () => {
    const path = faker.database.type();

    const {sut} = makeSut(path);

    const promise = sut.get();

    await expect(promise).rejects.toThrow(new EmptyValueReturnError());
  });

  test('Deve error 500 quando passar path errado(Exemplo URL com HTTP)', async () => {
    const path = faker.internet.url();

    const {sut} = makeSut(path);

    const promise = sut.get();

    await expect(promise).rejects.toThrow(new ServerError());
  });
});
