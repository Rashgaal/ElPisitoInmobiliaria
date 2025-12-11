import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmobiliaria } from '../models/entities';
import { URL_API } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class InmobiliariaService {
  
  private _http:HttpClient = inject(HttpClient);

  getInmobiliarias(): Observable<Array<Inmobiliaria>> {
  
      return this._http.get<Array<Inmobiliaria>>(`${URL_API}inmobiliarias`);
  
    }
  
    getInmobiliariasActivas(): Observable<Array<Inmobiliaria>> {
  
      return this._http.get<Array<Inmobiliaria>>(`${URL_API}inmobiliarias-activas`);
  
    }
  
    getInmobiliaria(id: number): Observable<Inmobiliaria> {
  
      return this._http.get<Inmobiliaria>(`${URL_API}inmobiliaria/${id}`);
  
    }
  
    addInmobiliaria(inmobiliaria: Inmobiliaria): Observable<Inmobiliaria> {
  
      return this._http.post<Inmobiliaria>(`${URL_API}inmobiliaria`, inmobiliaria);
  
    }
  
    updateInmobiliaria(inmobiliaria: Inmobiliaria): Observable<Inmobiliaria> {
  
      return this._http.put<Inmobiliaria>(`${URL_API}inmobiliaria`, inmobiliaria);
  
    }
    
}
