import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LojaPage } from '../../pages/loja/loja';

import { UsuarioLogado } from '../../model/UsuarioLogado';

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

  pontos : any = UsuarioLogado.getInstance().getUsuario().pontos;

  constructor(public navCtrl: NavController) {}
  
  irLoja() {
    this.navCtrl.setRoot(LojaPage);
  }
 
  ionViewDidLoad() {
    console.log(this.pontos)
  }

}