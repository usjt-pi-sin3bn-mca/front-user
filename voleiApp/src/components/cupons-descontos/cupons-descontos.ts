import { Component } from '@angular/core';
import { Parceiro } from '../../app/entities/parceiro';

@Component({
  selector: 'cupons-descontos',
  templateUrl: 'cupons-descontos.html'
})

export class CuponsDescontosComponent {

  text: string;
  public parceiros : Parceiro[]; 

  constructor() {
    var parceiro1 = {nome : 'Restaurante Torres Mooca', intro : 'Rua Quaritere, 201 - Mooca São Paulo, SP - (11)2274-7451 Segundo chopp por nossa conta, de segunda à sexta, entre 17:00 e 19:00.', imagem : '../../assets/imgs/parceiro1.png'};
    var parceiro2 = {nome : 'Monday Academia', intro : 'Av Paes de Barros, 485 - Mooca São Paulo, SP - (11)2966-5666 50% de descontonos primeiros 3 meses, com pagamentono cartão de crédito.', imagem : '../../assets/imgs/parceiro2.png'};
    var parceiro3 = {nome : 'Yazigi Mooca', intro : 'Av Paes de Barros, 2005 - Mooca São Paulo, SP - (11)2021-6222 30% de desconto na mensalidade e 20% no material didático até 31/07/2018.', imagem : '../../assets/imgs/parceiro3.png'};
    this.parceiros = [parceiro1, parceiro2, parceiro3]
    this.text = 'Aproveite as promoções! <br> Use os cupons promocionais e economize em compras e em serviços! <br> E se você for torcedor cadastrado, ainda pode ganhar em dobro!';
  }

  gerarCupom(nome : string) {
    alert('Gerou cupom de ' + nome + '!')
  }

}