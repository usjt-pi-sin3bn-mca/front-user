import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LojaPage } from '../../pages/loja/loja';

import { UsuarioLogado } from '../../model/UsuarioLogado';
import { ExperienciaProvider } from '../../providers/experiencia/experiencia';

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
  public lista:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _experiencias: ExperienciaProvider) {
    this.showAll();
    
  }
  async showAll() {
    
    this.lista = await this._experiencias.getExperiencia();
    this.lista = this.lista.reverse();

    console.log("lista", this.lista)
  }

  
  irLoja() {
    this.navCtrl.setRoot(LojaPage);
  }
 
  ionViewDidLoad() {
    console.log(this.pontos)
  }

}