import { Component } from '@angular/core';
import { IonicPage, Nav, NavParams, ModalController } from 'ionic-angular';
import { Pages } from '../pages';
import { LinkExternoProvider } from '../../providers/link-externo/link-externo';
import { FiltroProvider } from '../../providers/filtro/filtro';

import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
/**
 * Generated class for the LegislacaoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-legislacao-lista',
  templateUrl: 'legislacao-lista.html',
})
export class LegislacaoListaPage {

  public lista_geral:any;

  public searchControl: FormControl;
  public items: any;
  public titulo:string;
  public searching: any = false;

  public conteudo_modal:any;
  public flag_pag_geral:boolean;

  constructor(public navCtrl: Nav, public navParams: NavParams, private dataService:FiltroProvider, public link:LinkExternoProvider, public modalCtrl: ModalController) {
    // this.array_leis = this.navParams.get('array_leis');
    this.lista_geral = this.navParams.get('lista_geral');
    let titulo_param = this.navParams.get('tipo');

    this.titulo = titulo_param || "GERAL";
    // console.log(this.array_leis);
    this.dataService.setLista(this.lista_geral);
    this.searchControl = new FormControl();

    this.conteudo_modal = this.link.getItem(this.titulo);

    if(this.titulo == "GERAL" || this.titulo == "Faixa de domínio de rodovia" || this.titulo == "TAXA DE SERVIÇOS CADASTRAIS"|| this.titulo == "ADJUDICAÇÃO DE IMÓVEIS"|| this.titulo == "AGRICULTURA FAMILIAR" || this.titulo == "BANCO DA TERRA" || this.titulo =="COMPRA E VENDA DE IMÓVEIS PARA O PNRA" || this.titulo == "EXPROPRIAÇÃO POR CULTIVO DE PSICOTRÓPICO/ IMÓVEL PRODUTO DE ILÍCITO" || this.titulo == "PLANO NACIONAL DE JUVENTUDE RURAL" || this.titulo == "PROJETOS DE COLONIZAÇÃO" || this.titulo == "PROGRAMA DE FORTALECIMENTO DA AGRICULTURA FAMILIAR- PRONAF" || this.titulo == "PROGRAMA NACIONAL DE EDUCAÇÃO NA REFORMA AGRÁRIA"|| this.titulo == "REASSENTAMENTO DE NÃO ÍNDIOS")
    {
      this.flag_pag_geral = true;
    }
    else
    {
      this.flag_pag_geral = false;
    }
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
  }

  public navegar_detalhe(lei:any)
  {
    this.navCtrl.push(Pages.LegislacaoDetalhe, {lei:lei, tipo:this.titulo});
  }

  public mostrar_info()
  {
    let modal = this.modalCtrl.create('ModalInfoPage', {info:this.conteudo_modal});
    modal.present();
  }
}
