import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarSetsComponent } from './placar-sets/placar-sets';
@NgModule({
	declarations: [FormLoginComponent,
    PlacarSetsComponent],
	imports: [],
	exports: [FormLoginComponent,
    PlacarSetsComponent]
})
export class ComponentsModule {}
