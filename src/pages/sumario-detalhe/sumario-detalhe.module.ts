import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SumarioDetalhePage } from './sumario-detalhe';

@NgModule({
  declarations: [
    SumarioDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(SumarioDetalhePage),
  ],
})
export class SumarioDetalhePageModule {}
