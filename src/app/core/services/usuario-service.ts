import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/entities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
  private _http: HttpClient = inject(HttpClient);

  getUsuarios(): Observable<Array<Usuario>> {

    return this._http.get<Array<Usuario>>(`${URL_API}usuarios`);

  }

  getUsuariosActivos(): Observable<Array<Usuario>> {

    return this._http.get<Array<Usuario>>(`${URL_API}usuarios-activos`);

  }

  getUsuario(id: number): Observable<Usuario> {

    return this._http.get<Usuario>(`${URL_API}usuario/${id}`);

  }

  addUsuario(usuario: Usuario): Observable<Usuario> {

    return this._http.post<Usuario>(`${URL_API}usuario`, usuario);

  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {

    return this._http.put<Usuario>(`${URL_API}usuario`, usuario);

  }

}
