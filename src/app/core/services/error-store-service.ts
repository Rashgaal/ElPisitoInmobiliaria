import { Injectable, signal } from '@angular/core';
import { ErrorRespuesta } from '../models/dtos';

@Injectable({
  providedIn: 'root',
})
export class ErrorStoreService {

  //Un signal es una variable reactiva que guarda un valor. Cuando este valor
  //cambia, Angular vuelve a renderizar automáticamente las partes que lo usan
  //No usa RxJS sino un sistema propio muy liviano y eficiente

  //computed: crea un valor que depende de una o mas signals y se actualiza automáticamente
  //cuando alguna de las signals cambia

  //Creamos dos variables en el CONTEXT de Angular
  _errorStatus = signal<number>(404);
  _errorMessage = signal<string>("El contenido que estás buscando no existe.");

  setErrorStatus(status: number): void {

    this._errorStatus.set(status); // SETEA la signal en el contexto de Angular

  }

  setErrorMessage(message: string): void {

    this._errorMessage.set(message); // SETEA la signal en el contexto de Angular

  }


  /* getError():any{
  
  return this._error;
  } */

}