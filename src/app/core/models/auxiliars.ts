import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload{

    USUARIO:string;
    ROL:string;
    ID:number;

}

export interface UsuarioDataYState
{
    logueado?:boolean;
    id?:number;
    rol?:string;
    
}