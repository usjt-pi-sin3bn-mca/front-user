import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroSocioPage } from './cadastro-socio';

@NgModule({
  declarations: [
    CadastroSocioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroSocioPage),
  ],
})
export class CadastroSocioPageModule {}
