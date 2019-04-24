import { NgModule } from '@angular/core';
import { PlacarSetsComponent } from './placar-sets/placar-sets';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { AppHeaderComponent } from './app-header/app-header';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';
import { AppHotNewsComponent } from './app-hot-news/app-hot-news';
import { JogosInfoComponent } from './jogos-info/jogos-info';
import { FooterDivCentralComponent } from './footer-div-central/footer-div-central';
import { LoginScreenComponent } from './login-screen/login-screen';
import { AppCadastroComponent } from './app-cadastro/app-cadastro';
import { HomeMenuComponent } from './home-menu/home-menu';
import { AppSeusPontosComponent } from './app-seus-pontos/app-seus-pontos';

@NgModule({
	declarations: [
    LojaTorcidaComponent,
    CuponsDescontosComponent,
    FooterAppVoleiComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    PlacarSetsComponent,
    JogosInfoComponent,
    FooterDivCentralComponent,
    LoginScreenComponent,
    AppCadastroComponent,
    HomeMenuComponent,
    AppSeusPontosComponent
  ],
	imports: [],
	exports: [
	CuponsDescontosComponent,	
  LojaTorcidaComponent,
	FooterAppVoleiComponent,
	PlacarOnlineComponent,
  AppHeaderComponent,
  AppHotNewsComponent,
  PlacarSetsComponent,
  JogosInfoComponent,
  FooterDivCentralComponent,
  JogosInfoComponent,
  LoginScreenComponent,
  AppCadastroComponent,
  HomeMenuComponent,
  AppSeusPontosComponent
  ]
})
export class ComponentsModule {}