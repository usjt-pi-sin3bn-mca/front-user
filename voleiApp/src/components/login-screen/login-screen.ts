import { Component } from '@angular/core';
import { CadastroPage } from '../../pages/cadastro/cadastro';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
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
    console.log("usuario ", this.usuario);
    console.log("logado ", this._userProvider.logado);

    // if (this._userProvider.logado) {
    //   this.navCtrl.setRoot(HomePage);
    // }
    // this._userProvider._session.get('logado').then((val) => {
    //   console.log('Your age is', val);
    // });
  }
  
  goForm() {
    this.navCtrl.setRoot(CadastroPage);
  }
}


