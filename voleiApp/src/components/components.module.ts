import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarSetsComponent } from './placar-sets/placar-sets';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { AppHeaderComponent } from './app-header/app-header';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';
import { AppHotNewsComponent } from './app-hot-news/app-hot-news';
import { EspacoTorcedorComponent } from './espaco-torcedor/espaco-torcedor'

@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent,
    CuponsDescontosComponent,
    FooterAppVoleiComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    PlacarSetsComponent,
    EspacoTorcedorComponent
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
  EspacoTorcedorComponent
  ]
import { EspacoTorcedorComponent } from './espaco-torcedor/espaco-torcedor';
@NgModule({
	declarations: [FormLoginComponent,
    EspacoTorcedorComponent],
	imports: [],
	exports: [FormLoginComponent,
    EspacoTorcedorComponent]
})
export class ComponentsModule {}