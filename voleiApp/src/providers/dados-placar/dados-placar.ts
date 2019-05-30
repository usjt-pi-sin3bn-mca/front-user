import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

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

  constructor(public http: HttpClient) {
    console.log('Testando o Provider de partidas');
  }

  getToken(): string{
    return 'YXBwbGljYXRpb246bW9vU2Uyb2VzdXMyYWVyYQ==';
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
