import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarOnlineComponent } from './placar-online/placar-online';
@NgModule({
	declarations: [FormLoginComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
    PlacarOnlineComponent]
})
export class ComponentsModule {}
