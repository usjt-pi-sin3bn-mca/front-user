      import { HttpClient, HttpHeaders } from '@angular/common/http';
      import { Injectable } from '@angular/core';

      import { Usuario } from '../../model/Usuario';
      import { UsuarioLogado } from '../../model/UsuarioLogado';
      import { ToastController } from 'ionic-angular';
      import { RequestOptions } from '@angular/http';


      @Injectable()
      export class UserProvider  {
            // private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
            private baseApiPath = 'http://maestro.lucasduarte.club/api/';
      public apiResult: any;
      id : any ={
            id : ""
      }
      data: any;
      headers: any;
      usuario :Usuario;
      options = new RequestOptions({
            withCredentials: true
      });
      
      constructor(public http: HttpClient, public toastController: ToastController) {
            
      }
      async sucesso() {
            const toast = await this.toastController.create({
            message: "Cadastro realizado com sucesso !",
            duration: 2000, 
            position: 'top',
            });
            toast.present();
      }
      cadastroInicialUsuario(cadSimples) {
            return new Promise(
                  result => {
                        this.http.post(this.baseApiPath + 'torcedor', cadSimples,{
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
                        this.http.put(this.baseApiPath + 'torcedor/sersocio/'+UsuarioLogado.getInstance().getUsuario().id, user,
                        
                        {
                              headers: new HttpHeaders()
                              .set('Content-Type', 'application/json')
                              // .set('withCredentials', 'true')
                              // .set('Cookie', '6721B6B071D46B23ED4C0BA623DE896D')
                              // .set('Authentication' ,'cookie')
                              .set('Access-Control-Allow-Credentials' , 'true',)
                              .set('Acess-Control-Allow-Origin', '*')
                              .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
                              

                        }
                        )
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