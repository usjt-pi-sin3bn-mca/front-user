import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from '../../model/Usuario';
import { UsuarioLogado } from '../../model/UsuarioLogado';
import { ToastController } from 'ionic-angular';


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
    
  constructor(public http: HttpClient, public toastController: ToastController) {
      
  }
  async presentToast() {
      const toast = await this.toastController.create({
        message: "Email ou senha inválido",
        duration: 2000, 
        position: 'top',
      });
      toast.present();
    }
    async sucesso() {
      const toast = await this.toastController.create({
        message: "Cadastro realizado com sucesso !",
        duration: 2000, 
        position: 'top',
      });
      toast.present();
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
                             console.log("passou na request"); 
                              
                        }, (error) => {
                              console.log("deu ruim", error);
                              this.presentToast();
                        });
            }
      );
  }
  cadastroInicialUsuario(cadSimples) {
      return new Promise(
            result => {
                  this.http.post(this.baseApiPath + 'torcedor/', cadSimples,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                              this.sucesso();
                        }, (error) => {
                              console.log(error);
                        });
            }
      );
  }
  serSocio(user) {
        
      console.log(user );
      
      return new Promise(
            result => {
                  this.http.put(this.baseApiPath + 'torcedor/sersocio/'+UsuarioLogado.getInstance().getUsuario().id, user,{
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
  naoSerSocio() {
        
      console.log( );
      
      return new Promise(
            result => {
                  this.http.put(this.baseApiPath + 'torcedor/naosersocio/'+UsuarioLogado.getInstance().getUsuario().id,{
                        headers: new HttpHeaders().set('Content-Type', 'application/json')
                  })
                        .subscribe(data => {
                              console.log(data);
                              
                             
                        }, (error) => {
                              console.log(error);
                              console.log("Deu Ruim");
                             
                        });
            }
      );
  }

}