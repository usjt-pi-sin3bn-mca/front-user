import { Component } from '@angular/core';

/**
 * Generated class for the InicioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inicio',
  templateUrl: 'inicio.html'
})
export class InicioComponent {

  text: string;

  constructor() {
    console.log('Hello InicioComponent Component');
    this.text = 'Hello World';
  }

}
