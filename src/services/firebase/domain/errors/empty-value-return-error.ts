/* eslint-disable import/prefer-default-export */
export class EmptyValueReturnError extends Error{
  constructor(){
    super("Esse path retorna um valor vazio.")
    this.name = "EmptyValueReturnError"
  }
}