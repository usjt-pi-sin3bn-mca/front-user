import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TestPage } from '../pages/test/test';
import { LoginPage } from '../pages/login/login';
import { PlacarPage } from '../pages/placar/placar';
import { CuponsDeDescontoPage } from '../pages/cupons-de-desconto/cupons-de-desconto';
import { LojaPage } from '../pages/loja/loja';
import { SeusPontosPage } from '../pages/seus-pontos/seus-pontos';
import { EspacoTorcedorPage } from '../pages/espaco-torcedor/espaco-torcedor';
import { MarketPage } from '../pages/market/market';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';

import { CuponsDescontosComponent } from '../components/cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from '../components/loja-torcida/loja-torcida';
import { AppHeaderComponent } from '../components/app-header/app-header';
import { PlacarOnlineComponent } from '../components/placar-online/placar-online';
import { AppHotNewsComponent } from '../components/app-hot-news/app-hot-news';
import { PlacarSetsComponent } from '../components/placar-sets/placar-sets';
import { JogosInfoComponent } from '../components/jogos-info/jogos-info';
import { FooterAppVoleiComponent } from '../components/footer-app-volei/footer-app-volei';
import { FooterDivCentralComponent } from '../components/footer-div-central/footer-div-central';
import { LoginScreenComponent } from '../components/login-screen/login-screen';
import { AppCadastroComponent } from '../components/app-cadastro/app-cadastro'
import { HomeMenuComponent } from '../components/home-menu/home-menu';
import { AppSeusPontosComponent } from '../components/app-seus-pontos/app-seus-pontos';
import { EspacoDoTorcedorComponent } from '../components/espaco-do-torcedor/espaco-do-torcedor';
import { MarketplaceComponent } from '../components/marketplace/marketplace';
import { DadosPlacarProvider } from '../providers/dados-placar/dados-placar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    TestPage,
    PlacarPage,
    CuponsDeDescontoPage,
    LojaPage,
    SeusPontosPage,
    EspacoTorcedorPage,
    MarketPage,
    PlacarSetsComponent,
    CuponsDescontosComponent,
    LojaTorcidaComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    JogosInfoComponent,
    FooterAppVoleiComponent,
    FooterDivCentralComponent,
    LoginScreenComponent,
    AppCadastroComponent,
    HomeMenuComponent,
    AppSeusPontosComponent,
    EspacoDoTorcedorComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    TestPage,
    PlacarPage,
    CuponsDeDescontoPage,
    LojaPage,
    SeusPontosPage,
    EspacoTorcedorPage,
    MarketPage,
    CuponsDescontosComponent,
    LojaTorcidaComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    JogosInfoComponent,
    FooterAppVoleiComponent,
    FooterDivCentralComponent,
    LoginScreenComponent,
    AppCadastroComponent,
    HomeMenuComponent,
    AppSeusPontosComponent,
    EspacoDoTorcedorComponent,
    MarketplaceComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosPlacarProvider
  ]
})
export class AppModule {}