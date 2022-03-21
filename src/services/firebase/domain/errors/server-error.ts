/* eslint-disable import/prefer-default-export */
export class ServerError extends Error{
  constructor(){
    super("Erro ao fazer a requisição. Confira se o path passado está correto.")
    this.name = "ServerError"
  }
}