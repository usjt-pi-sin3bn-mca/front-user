import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Usuario } from '../../model/Usuario';
import { Storage } from '@ionic/storage';


/*
  Generated class for the DadosPlacarProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export  class  UserProvider  {
  private baseApiPath = 'http://localhost:8080/api/';
  public apiResult: any;
  listaPartidas: any;
  partidaAtual: any;
  data: any;
  headers: any;
  usuario :Usuario;
  logado: any = false;
  _session : Storage;

  id: object={
        id: Number
  };

  constructor(public http: HttpClient) {
    console.log('Testando o Provider usuario');
    this._session.set('logado', this.logado);
  }

  getToken(): string{
    return 'YXBwbGljYXRpb246bW9vU2Uyb2VzdXMyYWVyYQ==';
  }
  
   loginUsuario(user) {
        
        console.log('que isso aqui'+user);
      return new Promise(
            result => {
                  this.http.post(this.baseApiPath + 'torcedor/logar', user,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                              this.usuario =  data as Usuario;
                              console.log( this.usuario);
                              this._session.set('logado', true);
                             
                              
                        }, (error) => {
                              console.log(error);
                              this.logado = true;
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
                              this.id = data as Object;
                              console.log( user);
                              if(user.socio)
                               this.serSocio(user,this.id);
                              
                        }, (error) => {
                              console.log(error);
                        });
            }
      );
  }
  serSocio(user, id) {
        
      console.log('que isso aqui'+user+' id'+ id.id);
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
                        });
            }
      );
  }

}