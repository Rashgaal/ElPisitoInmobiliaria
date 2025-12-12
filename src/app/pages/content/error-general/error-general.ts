import { Component, inject, OnInit } from '@angular/core';
import { ErrorStoreService } from '../../../core/services/error-store-service';

@Component({
  selector: 'app-error-general',
  imports: [],
  templateUrl: './error-general.html',
  styleUrl: './error-general.css',
})
export class ErrorGeneral implements OnInit{

  status:number;
  message:string;

  private _errorStoreService = inject(ErrorStoreService);

  // ESTA ES LA MANERA DE HACERLO CON COMPUTED
  // status = computed (() => this._errorStoreService.getError().status ?? '');
  // message = computed (() => this._errorStoreService.getError().message ?? 'Error desconocido');

  ngOnInit(): void {

    /*console.log(this._errorStoreService._errorStatus);
    console.log(this._errorStoreService._errorMessage);*/

    this.status = this._errorStoreService._errorStatus();
    this.message = this._errorStoreService._errorMessage();

  }

}
