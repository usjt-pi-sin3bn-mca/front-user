import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { AppHeaderComponent } from '../../components/app-header/app-header';

@NgModule({
  declarations: [
    TestPage,
    AppHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
    AppHeaderComponent
  ],
})
export class TestPageModule {}
