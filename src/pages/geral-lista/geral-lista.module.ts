import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeralListaPage } from './geral-lista';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    GeralListaPage,
  ],
  imports: [
    IonicPageModule.forChild(GeralListaPage),
    ReactiveFormsModule
  ],
})
export class GeralListaPageModule {}
