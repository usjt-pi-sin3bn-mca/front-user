import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarSetsComponent } from './placar-sets/placar-sets';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { AppHeaderComponent } from './app-header/app-header';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';

@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent,
  CuponsDescontosComponent,
	FooterAppVoleiComponent,
  AppHeaderComponent,
	PlacarOnlineComponent,
  PlacarSetsComponent],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
  LojaTorcidaComponent,
	FooterAppVoleiComponent,
	PlacarOnlineComponent,
  AppHeaderComponent,
  PlacarSetsComponent
      ]
})
export class ComponentsModule {}