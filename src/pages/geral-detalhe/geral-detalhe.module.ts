import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeralDetalhePage } from './geral-detalhe';

@NgModule({
  declarations: [
    GeralDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(GeralDetalhePage),
  ],
})
export class GeralDetalhePageModule {}
