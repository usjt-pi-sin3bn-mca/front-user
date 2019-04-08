import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { PlacarOnlineComponent } from './placar-online/placar-online';
@NgModule({
	declarations: [FormLoginComponent,
    PlacarOnlineComponent,
    PlacarOnlineComponent],
	imports: [],
	exports: [FormLoginComponent,
    PlacarOnlineComponent,
    PlacarOnlineComponent]
})
export class ComponentsModule {}
