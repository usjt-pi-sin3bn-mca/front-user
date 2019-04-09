import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { LojaTorcidaComponent } from './loja-torcida/loja-torcida';
import { AppHeaderComponent } from './app-header/app-header';
@NgModule({
	declarations: [FormLoginComponent,
    LojaTorcidaComponent, AppHeaderComponent],
	imports: [],
	exports: [FormLoginComponent,
	CuponsDescontosComponent,	
    LojaTorcidaComponent,AppHeaderComponent]
})
export class ComponentsModule {}
