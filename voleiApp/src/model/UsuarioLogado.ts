import { Usuario } from "./Usuario";

export class UsuarioLogado{
    
    private static usuario: Usuario;
    private static instance: UsuarioLogado;
    
     setUsuario( user: Usuario){   
        UsuarioLogado.usuario = user;   
     } 
     getUsuario(): Usuario{
        return UsuarioLogado.usuario;
     }
    public static getInstance(): UsuarioLogado {
        if (UsuarioLogado.instance == null){
            UsuarioLogado.instance = new UsuarioLogado();
        }
        return UsuarioLogado.instance;
      }
}