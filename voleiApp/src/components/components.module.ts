import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarSetsComponent } from './placar-sets/placar-sets';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { AppHeaderComponent } from './app-header/app-header';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';
import { AppHotNewsComponent } from './app-hot-news/app-hot-news';
import { JogosInfoComponent } from './jogos-info/jogos-info';

@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent,
    CuponsDescontosComponent,
    FooterAppVoleiComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    PlacarSetsComponent,
    JogosInfoComponent
  ],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
  LojaTorcidaComponent,
	FooterAppVoleiComponent,
	PlacarOnlineComponent,
  AppHeaderComponent,
  AppHotNewsComponent,
  PlacarSetsComponent,
    JogosInfoComponent,
    FooterDivCentralComponent
  ]
})
export class ComponentsModule {}