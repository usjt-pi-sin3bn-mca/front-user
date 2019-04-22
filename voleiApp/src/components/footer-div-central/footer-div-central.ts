import { Component } from '@angular/core';

/**
 * Generated class for the FooterDivCentralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-div-central',
  templateUrl: 'footer-div-central.html'
})
export class FooterDivCentralComponent {

  text: string;

  constructor() {
    console.log('Hello FooterDivCentralComponent Component');
    this.text = 'Hello World';
  }

}
