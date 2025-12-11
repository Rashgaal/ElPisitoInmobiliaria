import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmueble } from '../models/entities';
import { URL_API } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class InmuebleService {

  private _http: HttpClient = inject(HttpClient);

  getInmuebles(): Observable<Array<Inmueble>> {

    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles`);

  }

  getInmueblesActivos(): Observable<Array<Inmueble>> {

    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-activos`);

  }

  getInmueble(id: number): Observable<Inmueble> {

    return this._http.get<Inmueble>(`${URL_API}inmueble/${id}`);

  }

  addInmueble(inmueble: Inmueble): Observable<Inmueble> {

    return this._http.post<Inmueble>(`${URL_API}inmueble`, inmueble);

  }

  updateInmueble(inmueble: Inmueble): Observable<Inmueble> {

    return this._http.put<Inmueble>(`${URL_API}inmueble`, inmueble);

  }

  getInmueblesPortada(): Observable<Array<Inmueble>> {

    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-portada`);

  }

  getInmueblesInmobiliaria(idInmobiliaria:number): Observable<Array<Inmueble>> {

    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles-inmobiliaria/${idInmobiliaria}`);

  }

  getInmueblesFinder(idTipo:number, idPoblacion:number, idOperacion:number):Observable<Array<Inmueble>>{
    
    return this._http.get<Array<Inmueble>>(`${URL_API}inmuebles/${idTipo}/${idPoblacion}/${idOperacion}`);

  }

}
