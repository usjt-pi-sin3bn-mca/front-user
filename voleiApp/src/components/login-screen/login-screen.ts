import { Component } from '@angular/core';
import { CadastroPage } from '../../pages/cadastro/cadastro';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { UsuarioLogado } from '../../model/UsuarioLogado';
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


  login: object = {
    email: "",
    senha: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userProvider: UserProvider ) {
   
  }

  fazerLogin() {
    
    this._userProvider.loginUsuario(this.login); 

    setTimeout(() =>{
      console.log("Teste", UsuarioLogado.getInstance().getUsuario());
      if(UsuarioLogado.getInstance().getUsuario()!= null){
        this.navCtrl.setRoot(HomePage);
      }
    }, 3000);
    
  }
   
  goForm() {
    this.navCtrl.setRoot(CadastroPage);
  }
}


