import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PontuacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PontuacaoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PontuacaoProvider Provider');
  }
  getListDetails(){
    return this.http.get('assets/data/products.json')
      .map((response:Response)=>response.json());
  }
}
