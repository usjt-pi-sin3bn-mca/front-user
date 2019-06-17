import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../../model/UsuarioLogado';

/*
  Generated class for the PontuacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PontuacaoProvider {

      private baseApiPath = 'http://maestro.lucasduarte.club/api/';
      public apiResult: any;

      public static pontos: any;
      constructor(public http: HttpClient) {
            console.log('Hello PontuacaoProvider Provider');
      }

      getPontos() {

            console.log();

            return new Promise(
                  result => {
                        this.http.get(this.baseApiPath + 'torcedor/pontuacao/' + UsuarioLogado.getInstance().getUsuario().id, {

                        })
                              .subscribe(data => {
                                    console.log(data);
                                    if (data == null) PontuacaoProvider.pontos = 0;
                                    else
                                          PontuacaoProvider.pontos = data;
                                    console.log("OLHA AQUI MEU " + data);

                              }, (error) => {
                                    console.log(error);
                                    console.log("Deu Ruim");

                              });
                  }
            );
      }
}
