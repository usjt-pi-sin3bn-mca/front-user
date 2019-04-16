import { Component } from '@angular/core';

/**
 * Generated class for the LoginScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-screen',
  templateUrl: 'login-screen.html'
})
export class LoginScreenComponent {

  text: string;

  constructor() {
    console.log('Hello LoginScreenComponent Component');
    this.text = 'Hello World';
  }

}
