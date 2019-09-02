import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LegislacaoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-legislacao-detalhe',
  templateUrl: 'legislacao-detalhe.html',
})
export class LegislacaoDetalhePage {
  lei_detalhe:any;
  tipo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lei_detalhe = this.navParams.get('lei');
    this.tipo = this.navParams.get('tipo');
    if(this.tipo != "GERAL")
    {
      let idx = this.lei_detalhe.conteudo.tipo.findIndex(x => x == this.tipo);
      this.lei_detalhe.conteudo.tipo = [this.lei_detalhe.conteudo.tipo[idx]];
      this.lei_detalhe.conteudo.descricao = [this.lei_detalhe.conteudo.descricao[idx]];
    }
    console.log(this.lei_detalhe);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SumarioDetalhePage');
  }

  ionViewWillEnter()
  {
    this.lei_detalhe = this.navParams.get('lei');
    // console.log(this.array_leis.conteudo);
  }

}

