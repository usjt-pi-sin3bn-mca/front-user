import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { InicioComponent } from './inicio/inicio';
@NgModule({
	declarations: [FormLoginComponent,
    InicioComponent],
	imports: [],
	exports: [FormLoginComponent,
    InicioComponent]
})
export class ComponentsModule {}
