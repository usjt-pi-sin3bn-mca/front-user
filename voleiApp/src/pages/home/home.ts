import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioLogado } from '../../model/UsuarioLogado';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      

  }
  ionViewDidLoad() {
   console.log("OLHA AQUI", UsuarioLogado.getInstance().getUsuario());
  }

}
