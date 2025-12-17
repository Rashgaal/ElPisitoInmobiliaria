import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TipoService } from '../../../core/services/tipo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipo } from '../../../core/models/entities';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Preloader } from "../../../shared/components/preloader/preloader";

@Component({
  selector: 'app-edit-tipo',
  imports: [FormsModule, Preloader],
  templateUrl: './edit-tipo.html',
  styleUrl: './edit-tipo.css',
})
export class EditTipo implements OnInit, OnDestroy {

  /////////////////////////////////////////////////
  nFases: number = 1;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  /////////////////////////////////////////////////



  private _tipoService: TipoService = inject(TipoService);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);

  tipo: Tipo;
  id: number;
  suscripcion: Subscription;



  ngOnInit(): void {
    this.getDatos();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  getDatos(): void {

    //conseguimos el id de la ruta (Observable hot)
    this.suscripcion = this._route.params.subscribe({

      next: (params) => { this.id = params['id'] }
    });

    this._tipoService.getTipo(this.id).subscribe({

      next: (datos) => { this.tipo = datos }
      ,
      error: (error) => { }
      ,
      complete: () => { this.faseCarga() }

    });



  }


  edit(): void {

    this.tipo.activo = Number(this.tipo.activo);
    this.tipo.nombre = this.tipo.nombre.toUpperCase();

    this._tipoService.updateTipo(this.tipo).subscribe({

      next: (datos) => { }
      ,
      error: (error) => { }
      ,
      complete: () => { this._router.navigate(['/admin/list-tipo'])}

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
