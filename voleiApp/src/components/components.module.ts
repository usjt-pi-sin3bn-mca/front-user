import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
<<<<<<< HEAD
<<<<<<< HEAD
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';
@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent,
    FooterAppVoleiComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
    LojaTorcidaComponent,
    FooterAppVoleiComponent,
=======
import { PlacarOnlineComponent } from './placar-online/placar-online';
@NgModule({
	declarations: [FormLoginComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
>>>>>>> Placar online
=======
import { PlacarOnlineComponent } from './placar-online/placar-online';
@NgModule({
	declarations: [FormLoginComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
>>>>>>> Placar online
    PlacarOnlineComponent]
})
export class ComponentsModule {}
