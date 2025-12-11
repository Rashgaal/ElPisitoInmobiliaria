import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload{

    USUARIO:string;
    ROL:string;
    ID:Number;

}