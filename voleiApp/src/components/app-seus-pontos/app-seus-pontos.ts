import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LojaPage } from '../../pages/loja/loja';

/**
 * Generated class for the AppSeusPontosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-seus-pontos',
  templateUrl: 'app-seus-pontos.html'
})
export class AppSeusPontosComponent {

  constructor(public navCtrl: NavController) {}
  
  irLoja() {
    this.navCtrl.setRoot(LojaPage);
  }

}