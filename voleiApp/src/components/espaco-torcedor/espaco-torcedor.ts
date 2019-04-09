import { Component } from '@angular/core';

/**
 * Generated class for the EspacoTorcedorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'espaco-torcedor',
  templateUrl: 'espaco-torcedor.html'
})
export class EspacoTorcedorComponent {

  text: string;

  constructor() {
    console.log('Hello EspacoTorcedorComponent Component');
    this.text = 'Hello World';
  }

}
