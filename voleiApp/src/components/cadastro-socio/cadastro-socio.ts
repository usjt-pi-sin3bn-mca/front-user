import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UsuarioLogado } from '../../model/UsuarioLogado';
import { LoginPage } from '../../pages/login/login';


/**
 * Generated class for the CadastroSocioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-socio',
  templateUrl: 'cadastro-socio.html'
})
export class CadastroSocioComponent {

  text: string;
  socio: any ={
    cpf:"",
    dataNascimento:"",
    endereco:"",
    celular:"",
    genero:""
  }
  usuario: any = {
    socio: UsuarioLogado.getInstance().getUsuario().socio
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public _userProvider : UserProvider) {
    console.log('Hello CadastroSocioComponent Component');
    this.text = 'Hello World';
  }
  serSocio(){
    
    this._userProvider.serSocio(this.socio);
    this.navCtrl.setRoot(LoginPage);
  }
  naoSerSocio(){
    this._userProvider.naoSerSocio();
    this.navCtrl.setRoot(LoginPage);
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
