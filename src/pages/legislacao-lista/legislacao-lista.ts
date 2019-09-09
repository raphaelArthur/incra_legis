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
  //Array recebido que contem as leis.
  public lista_geral:any;

  public searchControl: FormControl;
  public items: any;

  //Titulo da página
  public titulo:string;

  //Flag 
  public searching: any = false;

  public conteudo_modal:any;
  public flag_pag_geral:boolean;

  constructor(public navCtrl: Nav, public navParams: NavParams, private dataService:FiltroProvider, public link:LinkExternoProvider, public modalCtrl: ModalController) {
    //Recebe variáveis da página anterior.
    this.lista_geral = this.navParams.get('lista_geral');
    let titulo_param = this.navParams.get('tipo');

    this.titulo = titulo_param || "GERAL";
    
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

  /**
   * Instancia filtro
   */
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

  /**
   * Navega até a página de detalhe, para mostrar as informações referentes a legislação escolhida.
   * @param lei Lei a ser exibida na página de detalhe
   */
  public navegar_detalhe(lei:any)
  {
    this.navCtrl.push(Pages.LegislacaoDetalhe, {lei:lei, tipo:this.titulo});
  }

  /**
   * Mostra a modal com a informação esclarecendo o que é a categoria em questão. 
   * (Algumas páginas não possuem, pois não foram informadas)
   */
  public mostrar_info()
  {
    let modal = this.modalCtrl.create('ModalInfoPage', {info:this.conteudo_modal});
    modal.present();
  }
}
