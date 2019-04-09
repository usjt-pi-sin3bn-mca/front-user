import { Component } from '@angular/core';

/**
 * Generated class for the LojaTorcidaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loja-torcida',
  templateUrl: 'loja-torcida.html'
})
export class LojaTorcidaComponent {

  text: string;

  constructor() {
    console.log('Hello LojaTorcidaComponent Component');
    this.text = 'Hello World';
  }

}
