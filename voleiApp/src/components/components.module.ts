import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { LoginScreenComponent } from './login-screen/login-screen';
@NgModule({
	declarations: [FormLoginComponent,
    LoginScreenComponent],
	imports: [],
	exports: [FormLoginComponent,
    LoginScreenComponent]
})
export class ComponentsModule {}
