import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../../pages/login/login';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-screen',
  templateUrl: 'cadastro-screen.html'
})
export class CadastroScreenComponent {
  usuario : any = {
    nome:"",
    email:"",
    senha:""
    
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userProvider : UserProvider) {
    
  }



  cadatroSimples(){
    console.log("OLHA AQUI "+ this.usuario)
   
     if( this._userProvider.cadastroInicialUsuario(this.usuario))
      this.navCtrl.setRoot(LoginPage);
      else
      console.log("deu ruim ");
  }
 
  // selectInput(event) {
  //   let selected = event.target.value;
  //   if (selected == "socio") {
  //     this.usuario.socio = true;
  //   } else {
  //     this.usuario.socio = false;
  //   }
  // }
 

}
