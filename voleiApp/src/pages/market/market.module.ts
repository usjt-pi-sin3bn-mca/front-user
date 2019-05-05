import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPage } from './market';

@NgModule({
  declarations: [
    MarketPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPage),
  ],
})
export class MarketPageModule {}
