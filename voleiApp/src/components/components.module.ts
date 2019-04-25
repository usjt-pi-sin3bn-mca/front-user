import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
<<<<<<< HEAD
import { InicioComponent } from './inicio/inicio';
@NgModule({
	declarations: [FormLoginComponent,
    InicioComponent],
	imports: [],
	exports: [FormLoginComponent,
    InicioComponent]
=======
import { CuponsDescontosComponent } from './cupons-descontos/cupons-descontos';
@NgModule({
	declarations: [FormLoginComponent,
    CuponsDescontosComponent],
	imports: [],
	exports: [FormLoginComponent,
    CuponsDescontosComponent]
>>>>>>> 38e28eb4bbbbd03bda0b0229c61d343e9cd8d821
})
export class ComponentsModule {}
