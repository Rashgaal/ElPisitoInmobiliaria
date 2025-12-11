import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritoDTO, InmuebleDTO } from '../models/dtos';
import { URL_API } from '../environments/globals';
import { Inmueble } from '../models/entities';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {

  private _http: HttpClient = inject(HttpClient);

  // ESTE METODO DEVUELVE LOS ID DE LOS INMUEBLES FAVORITOS DE UN USUARIO
  getFavoritosId(idUsuario:number):Observable<Array<InmuebleDTO>>{

    return this._http.get<Array<Inmueble>>(`${URL_API}usuario-inmueble/${idUsuario}`)

  }

  // ESTE METODO DEVUELVE TODOS LOS DATOS DE TODOS LOS INMUEBLES FAVORITOS DE UN USUARIO

  getFavoritosCompleto(idUsuario:number):Observable<Array<Inmueble>>{

    return this._http.get<Array<Inmueble>>(`${URL_API}usuario-inmueble-completo/${idUsuario}`)

  }

  addFavorito(idUsuario: number, idInmueble: number):Observable<FavoritoDTO> {

    const params = new HttpParams()
      .set("usuid", idUsuario)
      .set("inmid", idInmueble);

    return this._http.post<FavoritoDTO>(`${URL_API}usuario-inmueble`, null, { params });

  }

  deleteFavorito(idUsuario:number, idInmueble:number):Observable<any>{

    const params = new HttpParams()
      .set("usuid", idUsuario)
      .set("inmid", idUsuario);

    return this._http.delete<any>(`${URL_API}usuario-inmueble/${idUsuario}/${idInmueble}`);

  }

}
