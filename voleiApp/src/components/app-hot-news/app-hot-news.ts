import { Component } from '@angular/core';

/**
 * Generated class for the AppHotNewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-hot-news',
  templateUrl: 'app-hot-news.html'
})
export class AppHotNewsComponent {

  text: string;

  constructor() {
    console.log('Hello AppHotNewsComponent Component');
    this.text = 'Hello World';
  }

}
