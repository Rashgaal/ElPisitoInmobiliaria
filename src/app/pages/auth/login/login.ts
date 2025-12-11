import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { Credenciales } from '../../../core/models/dtos';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  
  credenciales: Credenciales = {

    username: "",
    password: "",

  }

  loginForm = new FormGroup({

    elUsuario: new FormControl('', [Validators.required]),
    elPassword: new FormControl('', [Validators.required])

  });

  login(): void { 
    /* console.log("entro"); */
    if (this.loginForm.valid) {
      this.credenciales.username = this.loginForm.get("elUsuario")?.value || "";
      this.credenciales.password = this.loginForm.get("elPassword")?.value || "";
    }

    this._authService.login(this.credenciales).subscribe({
      next: (response) => { 

        this._authService.setTokenInLocalStorage(response.jwt); 
        this._comunicacionService.cambioLogin(true);

      }, error: (error) => {
        
      }, complete: () => { 

      }
    });
  }
}

