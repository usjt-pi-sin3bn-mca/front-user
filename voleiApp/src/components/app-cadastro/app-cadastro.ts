import { Component } from '@angular/core';

/**
 * Generated class for the AppCadastroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-cadastro',
  templateUrl: 'app-cadastro.html'
})
export class AppCadastroComponent {

  text: string;

  constructor() {
    console.log('Hello AppCadastroComponent Component');
    this.text = 'Hello World';
  }

}
