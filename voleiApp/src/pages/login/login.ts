import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioLogado } from '../../model/UsuarioLogado';


// import { Usuario } from '../../model/Usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: object = {
    email: "",
    senha: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.user.email = "";
    // this.user.senha = "";
  }

  ionViewDidLoad() {
    console.log("Teste", UsuarioLogado.getInstance().getUsuario()) 
    
  }
  




}
