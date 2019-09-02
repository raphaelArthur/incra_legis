import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegislacaoDetalhePage } from './legislacao-detalhe';

@NgModule({
  declarations: [
    LegislacaoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(LegislacaoDetalhePage),
  ],
})
export class LegislacaoDetalhePageModule {}
