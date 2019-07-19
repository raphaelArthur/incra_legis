import { Component } from '@angular/core';
import { IonicPage, Nav, NavParams } from 'ionic-angular';
import { Pages } from '../pages';

import { FiltroProvider } from '../../providers/filtro/filtro';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
/**
 * Generated class for the SumarioMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sumario-menu',
  templateUrl: 'sumario-menu.html',
})
export class SumarioMenuPage {

  array_tipo:any;
  lista_geral: any;
  
  public searchControl: FormControl;
  public items: any;
  searching: any = false;

  constructor(public navCtrl: Nav, public navParams: NavParams, private dataService:FiltroProvider) {
    this.array_tipo = this.navParams.get('array_tipo');
    this.lista_geral = this.navParams.get('lista_geral');

    this.dataService.setLista(this.array_tipo);
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm, "tipo");
    console.log(this.items);
  }

  public navegar_detalhe(tipo:any)
  {
    let lista = this.lista_geral.filter(item => {
      return item.conteudo.tipo.toLowerCase().indexOf(tipo.tipo.toLowerCase()) > -1;
    });
    this.navCtrl.push(Pages.GeralLista, {lista_geral:lista, array_tipo:this.array_tipo, tipo:tipo.tipo});
  }

}
