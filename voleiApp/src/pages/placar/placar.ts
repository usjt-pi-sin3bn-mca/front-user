import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosPlacarProvider } from '../../providers/dados-placar/dados-placar';

/**
 * Generated class for the PlacarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placar',
  templateUrl: 'placar.html',
})
export class PlacarPage {
  text: string;
  obj: any;
  result: any;
  partidaAtual: any;
  emAndamento: boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public _dadosPlacar: DadosPlacarProvider) {
  }

  ionViewDidLoad() {
    this.getAtual();
  }

  getAtual() {
    this._dadosPlacar.getAllPartidas()
      .then(data => {
        this.obj = data;
        this.partidaAtual = this.obj[0];
        console.log(this.partidaAtual);
        if (this.partidaAtual.partidaFinalizada == false && this.partidaAtual.partidaIniciada == true) {
          this.emAndamento = true;
        } else {
          this.emAndamento = false;
        }

      });
  }
  


}
