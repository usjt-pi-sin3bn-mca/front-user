import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  livros: Observable<any>;
  lista: Array<object>;
  dataExport: Object;


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.livros = this.httpClient.get('https://swapi.co/api/films');
    this.livros
    .subscribe(data => {
      data = data.results;
      console.log('my data: ', data);
      this.lista = data;
    });

    console.log(this.lista);

      


    

    // this.listaDeLivros = [];
    // for (let i = 1; i < this.lista.length; i++) {
    //   console.log()
    // }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
