import { Component } from '@angular/core';

/**
 * Generated class for the FooterAppVoleiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-app-volei',
  templateUrl: 'footer-app-volei.html'
})
export class FooterAppVoleiComponent {

  text: string;

  constructor() {
    console.log('Hello FooterAppVoleiComponent Component');
    this.text = 'Hello World';
  }

}
