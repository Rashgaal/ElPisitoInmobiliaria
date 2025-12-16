import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FinderData, UsuarioDataYState } from '../../../core/models/auxiliars';
import { Inmueble } from '../../../core/models/entities';
import { AuthService } from '../../../core/services/auth-service';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { InmuebleService } from '../../../core/services/inmueble-service';
import { ContenedorBanners } from "../contenedor-banners/contenedor-banners";
import { FichaInmueble } from "../ficha-inmueble/ficha-inmueble";
import { NoFinder } from "../no-finder/no-finder";
import { Preloader } from "../preloader/preloader";

@Component({
  selector: 'app-list-inmuebles-finder',
  imports: [Preloader, FichaInmueble, ContenedorBanners, NoFinder],
  templateUrl: './list-inmuebles-finder.html',
  styleUrl: './list-inmuebles-finder.css',
})
export class ListInmueblesFinder implements OnInit, OnDestroy {

  /////////////////////////////////////////////////
  nFases: number = 1;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  /////////////////////////////////////////////////


  @Input() datos:FinderData;

  private _inmuebleService: InmuebleService = inject(InmuebleService);
  private _comunicacionService: ComunicacionService = inject(ComunicacionService);
  private _authService: AuthService = inject(AuthService);

  inmuebles: Array<Inmueble>;
  suscripcion: Subscription;

  datosUsuarioYEstado: UsuarioDataYState ={};

  ngOnInit(): void {
    // ANOTACION DE PROGRAMADOR -> Indica que estadoLogin$ es un Obserbable
    this.suscripcion = this._comunicacionService.estadoLogin$.subscribe({
      next: (datos) => {
        //console.log("ID SUSUARIO =" + this._authService.getIdUsuarioFromToken())
        // Si no estas logueado el objeto seria -> 
        /*{
          logueado:false;
          id:0;
          rol:[NO_ROL];
        }*/
        this.datosUsuarioYEstado.id = this._authService.getIdUsuarioFromToken()!;
        this.datosUsuarioYEstado.rol = this._authService.getRolFromToken()!;
        this.datosUsuarioYEstado.logueado = datos;
      }
    });

    this.getDatos();

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getDatos(): void {

    this._inmuebleService.getInmueblesFinder(this.datos.idTipo, this.datos.idPoblacion, this.datos.idOperacion).subscribe({

      next: (datos) => {
        this.inmuebles = datos;
      }
      ,
      error: (error) => { }
      ,
      complete: () => { this.faseCarga() }


    });

  }

  ///////////////////////////////////////////////////////
  faseCarga(): void {

    this.fasesCargadas++;

    if (this.fasesCargadas == this.nFases) {

      this.cargaCompletada = true;
    }
  }
  //////////////////////////////////////////////////////

}
