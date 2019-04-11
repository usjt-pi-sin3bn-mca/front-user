import { Component } from '@angular/core';

/**
 * Generated class for the PlacarSetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'placar-sets',
  templateUrl: 'placar-sets.html'
})
export class PlacarSetsComponent {

  text: string;

  constructor() {
    console.log('Hello PlacarSetsComponent Component');
    this.text = 'Hello World';
  }

}
