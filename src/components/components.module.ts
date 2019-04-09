import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
import { AppSeusPontosComponent } from './app-seus-pontos/app-seus-pontos';
@NgModule({
	declarations: [FormLoginComponent,
    CuponsDescontosComponent,
    AppSeusPontosComponent],
	imports: [],
	exports: [FormLoginComponent,
    CuponsDescontosComponent,
    AppSeusPontosComponent]
})
export class ComponentsModule {}
