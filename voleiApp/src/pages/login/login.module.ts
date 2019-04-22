import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginScreenComponent } from '../../components/login-screen/login-screen'

@NgModule({
  declarations: [
    LoginPage,
    LoginScreenComponent
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
