import { Component } from '@angular/core';

/**
 * Generated class for the JogosInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jogos-info',
  templateUrl: 'jogos-info.html'
})
export class JogosInfoComponent {

  text: string;

  constructor() {
    console.log('Hello JogosInfoComponent Component');
    this.text = 'Hello World';
  }

}
