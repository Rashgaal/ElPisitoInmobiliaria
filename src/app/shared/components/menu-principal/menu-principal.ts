import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterLink],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.css',
})
export class MenuPrincipal implements OnInit, OnDestroy {

  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);

  estaLogueado: boolean;
  suscripcion: Subscription;
  usuario: string;
  rol: string;

  ngOnInit(): void {

    this._comunicacionService.estadoLogin$.subscribe({

      next: (estado) => {

        this.estaLogueado = estado

        if (this.estaLogueado) {

          this.usuario = this._authService.getUsuarioFromToken();
          this.rol = this._authService.getRolFromToken();
          this._router.navigate(["/"]);

        }

      }

    });

  }

  ngOnDestroy(): void {

    this.suscripcion.unsubscribe();

  }

  logout(): void {

    this._authService.logout();
    this._comunicacionService.cambioLogin(false);
    this._router.navigate(["/"]);
    this.usuario = "";
    this.rol = "";


  }

}
