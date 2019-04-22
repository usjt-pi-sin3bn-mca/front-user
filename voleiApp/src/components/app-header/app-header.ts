import { Component } from '@angular/core';

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  usuario: string = "Usuario";

  constructor() {
    console.log('Hello AppHeaderComponent Component');
  }

}
