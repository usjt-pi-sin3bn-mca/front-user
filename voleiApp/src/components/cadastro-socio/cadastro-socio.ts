import { Component } from '@angular/core';

/**
 * Generated class for the CadastroSocioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-socio',
  templateUrl: 'cadastro-socio.html'
})
export class CadastroSocioComponent {

  text: string;

  constructor() {
    console.log('Hello CadastroSocioComponent Component');
    this.text = 'Hello World';
  }

}
