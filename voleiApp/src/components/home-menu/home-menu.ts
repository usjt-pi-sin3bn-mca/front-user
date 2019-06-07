import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PlacarPage } from '../../pages/placar/placar';
import { CuponsDeDescontoPage } from '../../pages/cupons-de-desconto/cupons-de-desconto';
import { LojaPage } from '../../pages/loja/loja';
import { SeusPontosPage } from '../../pages/seus-pontos/seus-pontos';
import { EspacoTorcedorPage } from '../../pages/espaco-torcedor/espaco-torcedor';
import { MarketPage } from '../../pages/market/market';
import { UsuarioLogado } from '../../model/UsuarioLogado';

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
  val = true;

  constructor(public navCtrl: NavController, public toastController : ToastController) {

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Disponivel apenas para socios",
      duration: 2000, 
      position: 'bottom',
    });
    toast.present();
  }
  
  ionViewDidLoad() {
    console.log("OLHA AQUI", UsuarioLogado.getInstance().getUsuario());
  }

  irPlacar() {
    
      this.navCtrl.setRoot(PlacarPage);
    
  }

  irEspaco() {
    this.navCtrl.setRoot(EspacoTorcedorPage);
  }

  irCupom() {
    if(UsuarioLogado.getInstance().getUsuario().socio)
      this.navCtrl.setRoot(CuponsDeDescontoPage);
     else
      this.presentToast();
  }

  irLoja() {
    if(UsuarioLogado.getInstance().getUsuario().socio)
       this.navCtrl.setRoot(LojaPage);
    else
      this.presentToast();
  }

  irPontos() {
    if(UsuarioLogado.getInstance().getUsuario().socio)
      this.navCtrl.setRoot(SeusPontosPage);
    else
      this.presentToast();
  }
  
  irMarket() {
    if(UsuarioLogado.getInstance().getUsuario().socio)
      this.navCtrl.setRoot(MarketPage);
    else
      this.presentToast();
  }
}
