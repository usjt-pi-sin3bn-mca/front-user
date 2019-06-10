import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DadosPlacarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosPlacarProvider {
  private baseApiPath = 'http://jazz.lucasduarte.club/api/';
  public apiResult: any;
  listaPartidas: any;
  partidaAtual: any;
  data: any;
  dataRealTime: any;

  constructor(public http: HttpClient) {
    console.log('Testando o Provider de partidas');
  }

  getToken(): string{
    return 'YXBwbGljYXRpb246bW9vU2Uyb2VzdXMyYWVyYQ==';
  }

  getPointsRealTime() {
    let url = this.baseApiPath + 'partidas/';

    return Observable.interval(2000) 
      .switchMap(() => this.http.get(url).map((data) => data)).subscribe(data => {
        this.data = data;
        // resolve(this.data);
        console.log("passou", this.data);
      });
  }
  
  getAllPartidas() {
    let url = this.baseApiPath + 'partidas/';

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log("passou", this.data);
        },
        (error) => {
          console.log("Erro no provider de partidas");
        });
    });

  }
}
