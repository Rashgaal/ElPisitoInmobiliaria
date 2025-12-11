import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  
  private _authService:AuthService = inject(AuthService);
  
  estadoLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._authService.estaLogueado());
  // El dolar detras te dice que es un observable
  estadoLogin$: Observable<boolean> = this.estadoLogin.asObservable(); // hot

  cambioLogin(nuevoEstado:boolean):void{

    this.estadoLogin.next(nuevoEstado);

  }

}
