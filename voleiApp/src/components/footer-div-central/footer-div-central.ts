import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacarPage } from '../../pages/placar/placar';
import { CuponsDeDescontoPage } from '../../pages/cupons-de-desconto/cupons-de-desconto';
import { LojaPage } from '../../pages/loja/loja';
import { SeusPontosPage } from '../../pages/seus-pontos/seus-pontos';
import { EspacoTorcedorPage } from '../../pages/espaco-torcedor/espaco-torcedor';
import { MarketPage } from '../../pages/market/market';

/**
 * Generated class for the FooterDivCentralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-div-central',
  templateUrl: 'footer-div-central.html'
})
export class FooterDivCentralComponent {

  constructor(public navCtrl: NavController) {}

    irPlacar() {
      this.navCtrl.setRoot(PlacarPage);
    }

    irEspaco() {
      this.navCtrl.setRoot(EspacoTorcedorPage);
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

    irMarket() {
      this.navCtrl.setRoot(MarketPage);
    }
  }
