import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CustomJwtPayload } from '../models/auxiliars';
import { jwtDecode } from 'jwt-decode';
import { Credenciales } from '../models/dtos';
import { Observable } from 'rxjs';
import { URL_BASE } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token: string | null;
  private _http: HttpClient = inject(HttpClient);

  // Este metodo controla si el usuario esta logueado (si existe un token legal y activo)
  // o no esta logueado ( no existe token o esta expirado)
  estaLogueado(): boolean {

    // En caso de llegar aqui existe un token en localStorage pero no sabemos si es valido, debemos de comprobarlo
    let decoded: CustomJwtPayload;

    this.token = this.getTokenFromLocalStorage();
    // let currentTime = Date.now(); // milisegundos

    // En el caso de que el token no exista nos deslogueamos
    if (!this.token) {

      this.logout();
      return false;
    }

    // Si llegamos aqui, aunque el token puedfa esta caducado es un token... si logro decodearlo
    try {

      decoded = jwtDecode(this.token);

    } catch (error) {

      // Si ha habido un error en este proceso puede ser debido a que se ha intentado manupular el token
      // en local... entre otras muchas cosas
      this.logout();
      return false;

    }

    // Si llegamos aqui tenemos toklen y lo hemos podido decodificar
    // Ahora vamos a comprobar si la fecha tiene validez
    if (decoded.exp && decoded.exp * 1000 > Date.now()) { // comparamos milisegundos

      return true;

    } else {

      this.logout(); // no tiene sentido conservar un token que esta expirado
      return false;

    }

  }

  login(datos:Credenciales): Observable<any> {

    this.logout();
    return this._http.post<any>(`${URL_BASE}authenticate`, datos);

  }

  logout(): void {

    if (localStorage.getItem("token")) {

      localStorage.removeItem("token");

    }

  }

  getTokenFromLocalStorage(): string | null {

    return localStorage.getItem("token");
  }

  setTokenInLocalStorage(token: string): void {

    this.logout();
    localStorage.setItem("token", token);

  }

  getIdUsuarioFromToken():number{

    let decoded: CustomJwtPayload;

    this.token = this.getTokenFromLocalStorage();

    if (this.token) {
      try {

        decoded = jwtDecode(this.token);
        return decoded.ID;

      } catch (error) {
        return 0;
      }
    }

    return 0;

  }

  getUsuarioFromToken(): string {

    let decoded: CustomJwtPayload;

    this.token = this.getTokenFromLocalStorage();

    if (this.token) {
      try {

        decoded = jwtDecode(this.token);
        return decoded.USUARIO;

      } catch (error) {
        return "Desconocido";
      }
    }

    return "El usuario no está logueado";
  }

  getRolFromToken():string{

    let decoded: CustomJwtPayload;

    this.token = this.getTokenFromLocalStorage();

    let rol:string;

    if(this.token){

      decoded = jwtDecode(this.token);
      return decoded.ROL; // "[ROLE_USER]", "[ROLE_ADMIN]", "[ROLE_SUPER_ADMIN]"
      
    }
    return "[NO_ROL]";
  }

}
