import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Usuario } from '../../model/Usuario';
import { UsuarioLogado } from '../../model/UsuarioLogado';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private baseApiPath = 'http://rock.lucasduarte.club/api/login';
  public apiResult: any;
  id: any = {
    id: ""
  }
  data: any;
  headers: any;
  usuario: Usuario

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

  loginUsuario(user) {
    return new Promise(
      result => {
        this.http.post(this.baseApiPath + '?userType=torcedor', user, {
          headers: new HttpHeaders().set('Content-Type', 'application/json') })

          .subscribe(data => {
            console.log(data);
            this.usuario = data as Usuario;
            UsuarioLogado.getInstance().setUsuario(this.usuario);
            console.log("passou na request");

          }, (error) => {
            console.log("deu ruim", error);
            this.presentToast();
          });
      }
    );
  }

}
