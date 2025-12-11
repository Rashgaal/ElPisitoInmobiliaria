import { Component } from '@angular/core';
import { Finder } from "../../../shared/components/finder/finder";
import { ContenedorBanners } from "../../../shared/components/contenedor-banners/contenedor-banners";
import { ListInmueblesPortada } from "../../../shared/components/list-inmuebles-portada/list-inmuebles-portada";

@Component({
  selector: 'app-home',
  imports: [Finder, ContenedorBanners, ListInmueblesPortada],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
