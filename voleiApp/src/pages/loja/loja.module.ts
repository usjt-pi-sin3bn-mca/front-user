import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LojaPage } from './loja';

@NgModule({
  declarations: [
    LojaPage,
  ],
  imports: [
    IonicPageModule.forChild(LojaPage),
  ],
})
export class LojaPageModule {}
