import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TestPage } from '../pages/test/test';
import { PlacarPage } from '../pages/placar/placar';
import { LoginPage } from '../pages/login/login';

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    LoginPage,
    TestPage,
    PlacarPage,
    PlacarSetsComponent,
    CuponsDescontosComponent,
    LojaTorcidaComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    JogosInfoComponent,
    FooterAppVoleiComponent,
    FooterDivCentralComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    LoginPage,
    TestPage,
    PlacarPage,
    CuponsDescontosComponent,
    LojaTorcidaComponent,
    AppHeaderComponent,
    PlacarOnlineComponent,
    AppHotNewsComponent,
    JogosInfoComponent,
    FooterAppVoleiComponent,
    FooterDivCentralComponent,
    LoginScreenComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}