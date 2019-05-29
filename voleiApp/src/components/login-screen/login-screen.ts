import { Component } from '@angular/core';
import { CadastroPage } from '../../pages/cadastro/cadastro';
import { NavController } from 'ionic-angular';

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

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello LoginScreenComponent Component');
    this.text = 'Hello World';
  }

  goForm() {
    this.navCtrl.setRoot(CadastroPage);
  }
}
