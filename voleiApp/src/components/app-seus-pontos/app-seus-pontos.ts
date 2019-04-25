import { Component } from '@angular/core';

/**
 * Generated class for the AppSeusPontosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-seus-pontos',
  templateUrl: 'app-seus-pontos.html'
})
export class AppSeusPontosComponent {

  text: string;

  constructor() {
    console.log('Hello AppSeusPontosComponent Component');
    this.text = 'Hello World';
  }

}