import { Home } from "./home/home";
import { PublicaTuAnuncio } from "./publica-tu-anuncio/publica-tu-anuncio";
import { ConsultaHipotecas } from "./consulta-hipotecas/consulta-hipotecas";
import { NuestrosServicios } from "./nuestros-servicios/nuestros-servicios";
import { SobreElPisito } from "./sobre-el-pisito/sobre-el-pisito";
import { Contactar } from "./contactar/contactar";
import { MapaWeb } from "./mapa-web/mapa-web";
import { RegistroUsuario } from "./registro-usuario/registro-usuario";
import { DetailFinder } from "./detail-finder/detail-finder";

export const CONTENT_ROUTES = [

    {
        path: '',
        component: Home
    }
    ,
    {
        path: 'home',
        component: Home
    }
    ,
    {
        path: 'publica-anuncio',
        component: PublicaTuAnuncio
    }
    ,
    {
        path: 'consulta-hipoteca',
        component: ConsultaHipotecas
    }
    ,
    {
        path: 'nuestros-servicios',
        component: NuestrosServicios
    }
    ,
    {
        path: 'sobre-el-pisito',
        component: SobreElPisito
    }
    ,
    {
        path: 'contactar',
        component: Contactar
    }
    ,
    {
        path: 'mapa-web',
        component: MapaWeb
    }
    ,
    {
        path: 'registro-usuario',
        component: RegistroUsuario
    }
    ,
    {
        path: 'detail-finder/:idTipo/:idPoblacion/:idOperacion',
        component: DetailFinder
    }    
];