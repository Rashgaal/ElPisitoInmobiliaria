import { Injectable, signal } from '@angular/core';
import { ErrorRespuesta } from '../models/dtos';

@Injectable({
  providedIn: 'root',
})
export class ErrorStorageService {
  
  private _error = signal<ErrorRespuesta | null>(null);

  setError(error:ErrorRespuesta):void{

    this._error.set(error);

  }

  getError():any{

    return this._error;
  }
}
