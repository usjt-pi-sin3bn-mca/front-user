import { Component } from '@angular/core';
import { DadosPlacarProvider } from '../../providers/dados-placar/dados-placar';

/**
 * Generated class for the PlacarOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'placar-online',
  templateUrl: 'placar-online.html'
})
export class PlacarOnlineComponent {

  text: string;
  obj: any;
  result: any;
  partidaAtual: any;
  emAndamento: boolean = true;
  nomeLiga: string;
  pontuacaoSJ: any;
  rodada: number;
  dataPartida: string;
  horario: any = '';
  nomeAdversario: string;
  setsPartida: any;
  pontosSJ: number;
  pontosAdversario: number;
  totalSetsSJ: any;
  totalSetsAdversario: any;
  logoAdversario: string;
  visitante: boolean = false;


  constructor(public _dadosPlacar: DadosPlacarProvider) {
    this.getAtual();
  }

  //Pegando a partida atual
  getAtual() {
    this._dadosPlacar.getAllPartidas()
      .then(data => {
        this.obj = data;
        this.partidaAtual = this.obj[0];
        this.nomeLiga = this.partidaAtual.campeonato;
        this.pontuacaoSJ = '';
        this.rodada = this.partidaAtual.rodada;
        this.dataPartida = this.partidaAtual.data;
        this.nomeAdversario = this.partidaAtual.timeB;
        this.totalSetsSJ = this.partidaAtual.totalSetsTimeA;
        this.totalSetsAdversario = this.partidaAtual.totalSetsTimeB;
        this.visitante =  this.partidaAtual.visitante;
        this.logoAdversario = this.partidaAtual.urlLogoAdv;

        console.log("kk", this.rodada);

        if (this.partidaAtual.partidaFinalizada == false && this.partidaAtual.partidaIniciada == true) {
          this.emAndamento = true;
        } else {
          this.emAndamento = false;
        }
      });
  }

}
