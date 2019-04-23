import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacarPage } from '../../pages/placar/placar';
import { CuponsDeDescontoPage } from '../../pages/cupons-de-desconto/cupons-de-desconto';
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

  PlacarPage: PlacarPage

  constructor(public navCtrl: NavController) {}

    irPlacar() {
      this.navCtrl.setRoot(PlacarPage);
    }

    irCupom() {
      this.navCtrl.setRoot(CuponsDeDescontoPage);
    }

  }
