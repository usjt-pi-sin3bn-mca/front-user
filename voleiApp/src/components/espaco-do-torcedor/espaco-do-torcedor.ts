import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { CadastroSocioPage } from '../../pages/cadastro-socio/cadastro-socio';

/**
 * Generated class for the EspacoDoTorcedorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'espaco-do-torcedor',
  templateUrl: 'espaco-do-torcedor.html'
})
export class EspacoDoTorcedorComponent {

  text: string;

  constructor(public navCtrl: NavController,public toastController :ToastController) {
    console.log('Hello EspacoDoTorcedorComponent Component');
    this.text = 'Hello World';
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Em desenvolvimento",
      duration: 2000, 
      position: 'bottom',
    });
    toast.present();
  }

  indisponivel(){
    this.presentToast();
  }

  irPraCadSocio() {  
    this.navCtrl.setRoot(CadastroSocioPage);
  }
}