import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { ComunicacionService } from '../services/comunicacion-service';
import { inject } from '@angular/core';

export const usuarioGuard: CanActivateFn = (route, state) => {

  const _router: Router = inject(Router);
  const _authService: AuthService = inject(AuthService)
  const _comunicacionService: ComunicacionService = inject(ComunicacionService);

  if ((_authService.estaLogueado() && _authService.getRolFromToken() === "[ROLE_USER]") || (_authService.estaLogueado() && _authService.getRolFromToken() === "[ROLE_ADMIN]") || (_authService.estaLogueado() && _authService.getRolFromToken() === "[ROLE_SUPER_ADMIN]")) {

    return true;

  } else {

    _comunicacionService.cambioLogin(false);
    _router.navigate(["/auth/login"])
    return false;

  }

};
