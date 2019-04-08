import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
import { PlacarOnlineComponent } from './placar-online/placar-online';

@NgModule({
	declarations: [FormLoginComponent,
<<<<<<< HEAD
    LojaTorcidaComponent,
	FooterAppVoleiComponent,
	PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
    LojaTorcidaComponent,
	FooterAppVoleiComponent,
	PlacarOnlineComponent]
=======
    PlacarOnlineComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
    PlacarOnlineComponent,
    PlacarOnlineComponent]
>>>>>>> Placar online
})
export class ComponentsModule {}