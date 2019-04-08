import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
@NgModule({
	declarations: [FormLoginComponent,
    CuponsDescontosComponent],
	imports: [],
	exports: [FormLoginComponent,
    CuponsDescontosComponent]
})
export class ComponentsModule {}
