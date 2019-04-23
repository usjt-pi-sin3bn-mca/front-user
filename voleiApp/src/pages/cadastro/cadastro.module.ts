import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { AppCadastroComponent } from '../../components/app-cadastro/app-cadastro'

@NgModule({
  declarations: [
    CadastroPage,
    AppCadastroComponent
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage)
  ],
})
export class CadastroPageModule {}
