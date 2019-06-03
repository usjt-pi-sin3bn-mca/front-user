import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TestPage } from '../pages/test/test';
import { LoginPage } from '../pages/login/login';
import { PlacarPage } from '../pages/placar/placar';
import { CuponsDeDescontoPage } from '../pages/cupons-de-desconto/cupons-de-desconto';
import { LojaPage } from '../pages/loja/loja';
import { SeusPontosPage } from '../pages/seus-pontos/seus-pontos';
import { EspacoTorcedorPage } from '../pages/espaco-torcedor/espaco-torcedor';
import { MarketPage } from '../pages/market/market'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Home', component: HomePage },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Placar Online', component: PlacarPage },
      { title: 'Espaço do Torcedor', component: EspacoTorcedorPage },
      { title: "Marketplace", component: MarketPage},
      { title: 'Cupons de Desconto', component: CuponsDeDescontoPage },
      { title: 'Loja da Torcida', component: LojaPage },
      { title: 'Meus Pontos', component: SeusPontosPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}