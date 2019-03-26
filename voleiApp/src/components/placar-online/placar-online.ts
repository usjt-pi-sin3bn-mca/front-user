import { Component } from '@angular/core';

/**
 * Generated class for the PlacarOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'placar-online',
  templateUrl: 'placar-online.html'
})
export class PlacarOnlineComponent {

  text: string;

  constructor() {
    console.log('Hello PlacarOnlineComponent Component');
    this.text = 'Hello World';
  }

}
