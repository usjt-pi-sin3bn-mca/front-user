import { Component } from '@angular/core';

/**
 * Generated class for the FormLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-login',
  templateUrl: 'form-login.html'
})
export class FormLoginComponent {

  text: string;

  constructor() {
    console.log('Hello FormLoginComponent Component');
    this.text = 'Hello World';
  }

}
