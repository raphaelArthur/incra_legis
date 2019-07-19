import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SumarioListaPage } from './sumario-lista';

@NgModule({
  declarations: [
    SumarioListaPage,
  ],
  imports: [
    IonicPageModule.forChild(SumarioListaPage),
  ],
})
export class SumarioListaPageModule {}
