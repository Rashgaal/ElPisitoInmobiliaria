import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  let _authService = inject(AuthService);
  let token = _authService.getTokenFromLocalStorage();

  if(token){
    // Si hay token lo añadimos al encabezado de la peticion(todas las peticiones pasan por aqui)
    // Pero no podemos modificar el objeto req (que es la peticion) porque son OBJETOS INMUTABLES!!
    // Para poder realizar la "modificacion" (que es añadir el token al obejto req) vamos a crear un con con
    // el metodo clone que efectua una copia pura (no hace una copia de referencia)
    const cloneReq = req.clone({

      headers:req.headers.append('Authorization', `Bearer ${token}`)

    });

    return next(cloneReq);

  }

  return next(req);
};
