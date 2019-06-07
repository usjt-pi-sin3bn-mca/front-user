import { Component } from '@angular/core';
import { DadosPlacarProvider } from '../../providers/dados-placar/dados-placar';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PlacarSetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'placar-sets',
  templateUrl: 'placar-sets.html'
})
export class PlacarSetsComponent {

  text: string;
  obj: any;
  setsPartida: any;
  pontosSJ: any;
  pontosAdversario: any;
  totalSetsSJ: number;
  totalSetsAdversario: number;
  data: any;

  constructor(public _dadosPlacar: DadosPlacarProvider, public http: HttpClient) {
    this.getPointsRealTime();
    console.log(this.data)
  }

  ionViewDidLoad() {
    
  }

  getPointsRealTime() {
    let url = 'http://jazz.lucasduarte.club/api/partidas/';

    return Observable.interval(2000) 
      .switchMap(() => this.http.get(url).map((data) => data)).subscribe(data => {
        this.obj = data;
        this.obj = this.obj.reverse();
        let partidaAtual = this.obj[0];
        this.setsPartida = partidaAtual.sets;
        this.pontosSJ =  this.setsPartida[0].pontoA;
        this.pontosAdversario =  this.setsPartida[0].pontoB;
        this.totalSetsSJ = partidaAtual.totalSetsTimeA;
        this.totalSetsAdversario = partidaAtual.totalSetsTimeB;
      
        console.log("eae", this.obj);
        console.log("lllll", this.data);
      });
  }
}
