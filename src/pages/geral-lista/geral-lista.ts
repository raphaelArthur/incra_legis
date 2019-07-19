import { Component } from '@angular/core';
import { IonicPage, Nav, NavParams } from 'ionic-angular';
import { Pages } from '../pages';
import { FiltroProvider } from '../../providers/filtro/filtro';

import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";


/**
 * Generated class for the GeralListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geral-lista',
  templateUrl: 'geral-lista.html',
})
export class GeralListaPage {
  // public array_leis:any;
  public lista_geral:any;

  public searchControl: FormControl;
  public items: any;
  public titulo:string;
  searching: any = false;

  constructor(public navCtrl: Nav, public navParams: NavParams, private dataService:FiltroProvider) {
    // this.array_leis = this.navParams.get('array_leis');
    this.lista_geral = this.navParams.get('lista_geral');
    let titulo_param = this.navParams.get('tipo');

    this.titulo = titulo_param || "GERAL";
    // console.log(this.array_leis);
    this.dataService.setLista(this.lista_geral);
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
    this.items = this.dataService.filterItems(searchTerm, "lei");
    // console.log(this.items);
  }

  public navegar_detalhe(lei:any)
  {
    // console.log(index);
    // let lei = {
    //   ato:this.array_leis[idx_lei].conteudo.ato[idx_conteudo],
    //   descricao:this.array_leis[idx_lei].conteudo.descricao[idx_conteudo],
    //   leis:this.array_leis[idx_lei].conteudo.lei[idx_conteudo],
    //   documento:this.array_leis[idx_lei].conteudo.link[idx_conteudo],
    //   tipo:this.array_leis[idx_lei].conteudo.tipo
    // };

    this.navCtrl.push(Pages.SumarioDetalhe, {lei:lei});
  }
}
