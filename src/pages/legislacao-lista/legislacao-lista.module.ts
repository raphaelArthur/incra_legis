import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegislacaoListaPage } from './legislacao-lista';

@NgModule({
  declarations: [
    LegislacaoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(LegislacaoListaPage),
  ],
})
export class LegislacaoListaPageModule {}
