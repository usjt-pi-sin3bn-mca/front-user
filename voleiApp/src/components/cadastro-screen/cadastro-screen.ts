import { Component } from '@angular/core';

/**
 * Generated class for the CadastroScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro-screen',
  templateUrl: 'cadastro-screen.html'
})
export class CadastroScreenComponent {

  text: string;

  constructor() {
    console.log('Hello CadastroScreenComponent Component');
    this.text = 'Hello World';
  }

}
