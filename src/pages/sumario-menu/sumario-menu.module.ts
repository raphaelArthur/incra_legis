import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SumarioMenuPage } from './sumario-menu';

@NgModule({
  declarations: [
    SumarioMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SumarioMenuPage),
  ],
})
export class SumarioMenuPageModule {}
