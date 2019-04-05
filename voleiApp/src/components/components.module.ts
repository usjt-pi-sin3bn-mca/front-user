import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { AppFooterComponent } from './app-footer/app-footer';
@NgModule({
	declarations: [FormLoginComponent,
    AppFooterComponent],
	imports: [],
	exports: [FormLoginComponent,
    AppFooterComponent]
})
export class ComponentsModule {}
