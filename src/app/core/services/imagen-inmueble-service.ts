import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_IMAGEN_INMUEBLE } from '../environments/globals';

@Injectable({
  providedIn: 'root',
})
export class ImagenInmuebleService {
  
  private _http: HttpClient = inject(HttpClient);

  // METODOS STORAGE IMAGEN INMUEBLE

  uploadImagenInmueble(formData:FormData, idInmueble:number,):Observable<any>{

    return this._http.post<any>(`${URL_IMAGEN_INMUEBLE}${idInmueble}`, formData);

  }

  // Este metodo va a borrar la imagen fisica y el apunte de la BBDD
  deleteImagen(idImagen:number):Observable<any>{

    return this._http.delete<any>(`${URL_IMAGEN_INMUEBLE}${idImagen}`);

  }

  // LOS METODOS COMUNES, EN ESTE CASO, NO HACEN FALTA A NIVEL DE CLIENTE



}
