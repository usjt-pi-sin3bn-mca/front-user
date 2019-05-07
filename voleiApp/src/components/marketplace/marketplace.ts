import { Component } from '@angular/core';

/**
 * Generated class for the MarketplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'marketplace',
  templateUrl: 'marketplace.html'
})
export class MarketplaceComponent {

  text: string;

  constructor() {
    console.log('Hello MarketplaceComponent Component');
    this.text = 'Hello World';
  }

}

