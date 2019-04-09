import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { EspacoTorcedorComponent } from './espaco-torcedor/espaco-torcedor';
@NgModule({
	declarations: [FormLoginComponent,
    EspacoTorcedorComponent],
	imports: [],
	exports: [FormLoginComponent,
    EspacoTorcedorComponent]
})
export class ComponentsModule {}
