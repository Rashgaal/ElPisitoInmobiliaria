import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoService } from '../../../core/services/tipo-service';
import { Tipo } from '../../../core/models/entities';
import { Preloader } from "../../../shared/components/preloader/preloader";
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-tipo',
  imports: [FormsModule, Preloader, NgClass, RouterLink],
  templateUrl: './list-tipo.html',
  styleUrl: './list-tipo.css',
})
export class ListTipo implements OnInit {


  /////////////////////////////////////////////////
  nFases: number = 1;
  cargaCompletada: boolean = false;
  fasesCargadas: number = 0;
  /////////////////////////////////////////////////

  private _tipoService: TipoService = inject(TipoService);


  aDatos: Array<Tipo> = [];

  ngOnInit(): void {

    this.getDatos();
  }



  getDatos(): void {

    this._tipoService.getTipos().subscribe({

      next: (datos) => { this.aDatos = datos }
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
