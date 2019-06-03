import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Usuario } from '../../model/Usuario';
import { UsuarioLogado } from '../../model/UsuarioLogado';


@Injectable()
export class UserProvider  {
  private baseApiPath = 'https://maestro.lucasduarte.club/api/';
  public apiResult: any;
  id : any ={
        id : ""
  }
  data: any;
  headers: any;
  usuario :Usuario;
    
  constructor(public http: HttpClient) {
      
  }
  
   loginUsuario(user) {
      return new Promise(
            result => {
                  this.http.post(this.baseApiPath + 'torcedor/logar/', user
            
                  )
                        .subscribe(data => {
                             console.log(data);
                             this.usuario =  data as Usuario;
                             UsuarioLogado.getInstance().setUsuario(this.usuario);
                             console.log("passou na request",UsuarioLogado.getInstance().getUsuario()); 
                              
                        }, (error) => {
                              console.log("deu ruim", error);
                        });
            }
      );
  }
  cadastroInicialUsuario(user) {
      return new Promise(
            result => {
                  this.http.post(this.baseApiPath + 'torcedor/', user,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                               this.id.id = data as any;
                              console.log( user);
                              if(user.socio){                 
                               this.serSocio(user as Usuario,this.id.id);
                               console.log( user as Usuario);
                              }
                              
                        }, (error) => {
                              console.log(error);
                        });
            }
      );
  }
  serSocio(user, id) {
        
      console.log(user );
      
      return new Promise(
            result => {
                  this.http.put(this.baseApiPath + 'torcedor/sersocio/'+id.id, user,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                              this.usuario =  data as Usuario;
                              console.log( this.usuario);
                             
                        }, (error) => {
                              console.log(error);
                              console.log("Deu Ruim");
                             
                        });
            }
      );
  }

}