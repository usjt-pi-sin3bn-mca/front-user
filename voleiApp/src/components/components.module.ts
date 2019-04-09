import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { FooterAppVoleiComponent } from './footer-app-volei/footer-app-volei';
@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent,
    FooterAppVoleiComponent],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
    LojaTorcidaComponent,
    FooterAppVoleiComponent]
})
export class ComponentsModule {}
