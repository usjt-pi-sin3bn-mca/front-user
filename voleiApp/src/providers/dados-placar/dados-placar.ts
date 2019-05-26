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



    //return new Promise(() => {
      // subscribe((result: any) => {
      //     console.log("passou", result);
      //     this.listaPartidas = result;

      //     this.partidaAtual = result[0];
      //   },
      //   (error) => {
      //     console.log("Erro no provider de partidas");
      //   });
    // });
  }


  // private API_URL = 'http://jazz.lucasduarte.club/api/partidas/';

  // constructor(public http: HttpClient) {
  //   console.log('Hello DadosPlacarProvider Provider');
  // }

  // getPlacar() {
  //   return new Promise(() => {
 
  //     let url = this.API_URL;

  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     //headers.append('Accept', 'application/json');
  //     headers.append('Authorization', 'Basic YXBwbGljYXRpb246bW9vU2Uyb2VzdXMyYWVyYQ==');

  //     let options = new RequestOptions({ headers: headers });



  //     // let reqOpts = {
  //     //   headers: {
  //     //     'content-type': 'application/json',
  //     //     'authorization': 'Basic YXBwbGljYXRpb246bW9vU2Uyb2VzdXMyYWVyYQ=='
  //     //   },
  //     //   //params: new HttpParams()
  //     // };

  //     console.log("headers:", options);


  //     this.http.get(url, options).subscribe((result: any) => {
  //         // resolve(result.json());
  //         console.log("passou");
  //     },
  //     (error) => {
  //       console.log("erro")
  //     });
  //   });
  // }

}
