import { Component } from '@angular/core';

import { UsuarioLogado } from '../../model/UsuarioLogado';
import { Usuario } from '../../model/Usuario';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {
  user : Usuario = UsuarioLogado.getInstance().getUsuario();
  
  

  constructor(public navCtrl: NavController ) {
    console.log('Hello AppHeaderComponent Component');
   
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
