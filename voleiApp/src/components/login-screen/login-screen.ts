import { Component } from '@angular/core';

import { UserProvider } from '../../providers/user/user';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';





/**
 * Generated class for the LoginScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-screen',
  templateUrl: 'login-screen.html'
})
export class LoginScreenComponent {


  usuario: object = {
    email: "",
    senha: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userProvider: UserProvider ) {
    // this.user.email = "";
    // this.user.senha = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  fazerLogin(){
      this._userProvider.loginUsuario(this.usuario);  
    console.log();
      this.navCtrl.setRoot(HomePage);
      this._userProvider._session.get('logado').then((val) => {
        console.log('Your age is', val);
      });
    }
  
 
       
      
  }
