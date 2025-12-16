import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { ComunicacionService } from '../services/comunicacion-service';

export const superGuard: CanActivateFn = (route, state) => {

  const _router:Router = inject(Router);
  const _authService:AuthService = inject(AuthService)
  const _comunicacionService:ComunicacionService = inject(ComunicacionService);

  if(_authService.estaLogueado() && _authService.getRolFromToken() === "[ROLE_SUPER_ADMIN]"){
    
    return true;

  } else{

    _comunicacionService.cambioLogin(false);
    _router.navigate(["/auth/login"])
    return false;

  }
  
};
