import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../../pages/login/login';
import { NavController, NavParams, ToastController } from 'ionic-angular';

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
  _userProvider: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastController: ToastController) {

  }

  async erro() {
    const toast = await this.toastController.create({
      message: "Login ou senha Invalidos!",
      duration: 2000, 
      position: 'top',
    });
    toast.present();
  }

  cadatroSimples(){
    console.log("OLHA AQUI "+ this.usuario)
   
    if(this.usuario.nome != "" && this.usuario.email!="" &&this.usuario.senha!=""){
      if( this._userProvider.cadastroInicialUsuario(this.usuario))
        this.navCtrl.setRoot(LoginPage);
      else
        this.erro();
        console.log("deu ruim ");
      }
    else
        this.erro();
        console.log("deu ruim ");
  }

  irLogin() {
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
