import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacarRodaPe } from './placar-roda-pe';

@NgModule({
  declarations: [
    PlacarRodaPe,
  ],
  imports: [
    IonicPageModule.forChild(PlacarRodaPe),
  ],
})
export class PlacarRodaPeModule {}
