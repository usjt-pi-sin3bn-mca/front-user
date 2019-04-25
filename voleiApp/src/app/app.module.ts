import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, App } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TestPage } from '../pages/test/test';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { InicioComponent } from '../components/inicio/inicio';
=======
import { TestPage } from '../pages/test/test';
import { CuponsDescontosComponent } from '../components/cupons-descontos/cupons-descontos';
>>>>>>> 38e28eb4bbbbd03bda0b0229c61d343e9cd8d821

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    TestPage,
<<<<<<< HEAD
    InicioComponent
=======
    CuponsDescontosComponent
>>>>>>> 38e28eb4bbbbd03bda0b0229c61d343e9cd8d821
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
    TestPage,
<<<<<<< HEAD
    InicioComponent

=======
    CuponsDescontosComponent
>>>>>>> 38e28eb4bbbbd03bda0b0229c61d343e9cd8d821
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
