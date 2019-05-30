import { Component } from '@angular/core';

import { Usuario } from '../../model/Usuario';
import { UserProvider } from '../../providers/user/user';

import { LoginPage } from '../../pages/login/login';
import { NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the AppCadastroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-component',
  templateUrl: 'app-cadastro.html'
})
export class AppCadastroComponent {
  usuario : Usuario = {
    celular: "",
    contaAtiva:  "",
    cpf: "",
    dataNascimento:  "",
    email:  "",
    endereco:  "",
    genero: "",
    id: "",
    nome:"",
    pontos: "",
    socio: false
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userProvider : UserProvider) {
    
  }

  cadastrar(socio){
    console.log("OLHA AQUI "+ socio)
  }
  
  showFields(arg) {
    console.log(arg);
    this.usuario.socio = arg;
  }
  cadatroSimples(usuario){
  
     if( this._userProvider.cadastroInicialUsuario(usuario))
      this.navCtrl.setRoot(LoginPage);
      else
      console.log("deu ruim ");

 
   
  }
 

}
