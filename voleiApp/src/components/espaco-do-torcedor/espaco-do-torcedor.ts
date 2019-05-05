import { Component } from '@angular/core';

/**
 * Generated class for the EspacoDoTorcedorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'espaco-do-torcedor',
  templateUrl: 'espaco-do-torcedor.html'
})
export class EspacoDoTorcedorComponent {

  text: string;

  constructor() {
    console.log('Hello EspacoDoTorcedorComponent Component');
    this.text = 'Hello World';
  }

}