import { Component } from '@angular/core';
import { Parceiro } from '../../app/entities/parceiro';
import { NavController, NavParams } from 'ionic-angular';
import { ConvenioProvider } from '../../providers/convenio/convenio';

@Component({
  selector: 'cupons-descontos',
  templateUrl: 'cupons-descontos.html'
})

export class CuponsDescontosComponent {

  text: string;
  public lista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _convenios: ConvenioProvider) {
    this.showAll();
    
  }

  ionViewDidLoad() {
    this.showAll()
  }

  async showAll() {
    
    this.lista = await this._convenios.getAllConvenios();
    this.lista = this.lista.reverse();

    console.log("lista", this.lista)
  }


  gerarCupom(nome : string) {
    alert('Gerou cupom de ' + nome + ': Y84HB4U73Y8Y37RGH')
  }

}