import { Component, Input } from '@angular/core';
import { Inmueble } from '../../../core/models/entities';
import { ParentesisPipe } from "../../pipes/parentesis-pipe";
import { EurosPipe } from "../../pipes/euros-pipe";
import { RouterLink } from '@angular/router';
import { CarouselFicha } from "../carousel-ficha/carousel-ficha";
import { UsuarioDataYState } from '../../../core/models/auxiliars';
import { BotonAdmin } from "../boton-admin/boton-admin";
import { CorazonFavoritos } from "../corazon-favoritos/corazon-favoritos";

@Component({
  selector: 'app-ficha-inmueble',
  imports: [ParentesisPipe, EurosPipe, RouterLink, CarouselFicha, BotonAdmin, CorazonFavoritos],
  templateUrl: './ficha-inmueble.html',
  styleUrl: './ficha-inmueble.css',
})
export class FichaInmueble {

  @Input() datos:Inmueble;
  @Input() datosUsuario:UsuarioDataYState;
  
}
