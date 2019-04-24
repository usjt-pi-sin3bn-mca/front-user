import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacarPage } from '../../pages/placar/placar';
import { CuponsDeDescontoPage } from '../../pages/cupons-de-desconto/cupons-de-desconto';
import { LojaPage } from '../../pages/loja/loja';
import { SeusPontosPage } from '../../pages/seus-pontos/seus-pontos';

/**
 * Generated class for the HomeMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-menu',
  templateUrl: 'home-menu.html'
})
export class HomeMenuComponent {

  text: string;

  constructor(public navCtrl: NavController) {}

  irPlacar() {
    this.navCtrl.setRoot(PlacarPage);
  }

  irCupom() {
    this.navCtrl.setRoot(CuponsDeDescontoPage);
  }

  irLoja() {
    this.navCtrl.setRoot(LojaPage);
  }

  irPontos() {
    this.navCtrl.setRoot(SeusPontosPage);
  }
}
