import { Component } from '@angular/core';
import { DadosPlacarProvider } from '../../providers/dados-placar/dados-placar';

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

  constructor(public _dadosPlacar: DadosPlacarProvider) {
    this.getSets();
  }

  ionViewDidLoad() {
    
  }

  getSets() {
    this._dadosPlacar.getAllPartidas()
    .then(data => {
      this.obj = data;
      let partidaAtual = this.obj[11];
      this.setsPartida = partidaAtual.sets;
      this.pontosSJ =  this.setsPartida[0].pontoA;
      this.pontosAdversario =  this.setsPartida[0].pontoB;
      this.totalSetsSJ = partidaAtual.totalSetsTimeA;
      this.totalSetsAdversario = partidaAtual.totalSetsTimeB;
      
      console.log("eae", this.pontosSJ);

      this.setsPartida.forEach(element => {
        
      });

    });
  }

}
