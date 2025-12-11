export interface InmuebleDTO{
    
    id?:number;

}

export interface FavoritoDTO{
    
    idInmueble:number;
    nombreTipo:string;
    nombrePoblacion:string;
    nombreProvinvia:string;
    nombreOperacion:string;
    precio:number;
    nombreInmobiliaria:string;
    
}

export interface Credenciales{

    username:string;
    password:string;

}

export interface ErrorRespuesta{

    timestamp?:Date;
    status:number;
    error?:string;
    message:string;
    path?:string;

}