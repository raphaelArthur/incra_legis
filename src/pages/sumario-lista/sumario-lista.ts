import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pages } from '../pages';
/**
 * Generated class for the SumarioListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sumario-lista',
  templateUrl: 'sumario-lista.html',
})
export class SumarioListaPage {

  array_leis:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.array_leis = this.navParams.get('lista');
    // console.log(this.array_leis.conteudo.tipo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SumarioListaPage');
  }

  ionViewWillEnter()
  {
    this.array_leis = this.navParams.get('lista');
    console.log(this.array_leis.conteudo);
  }

  public navegar_detalhe(index:any)
  {
    console.log(index);
    let lei = {
      ato:this.array_leis.conteudo.ato[index],
      descricao:this.array_leis.conteudo.descricao[index],
      leis:this.array_leis.conteudo.lei[index],
      documento:this.array_leis.conteudo.link[index],
      tipo:this.array_leis.conteudo.tipo,
    };

    this.navCtrl.push(Pages.SumarioDetalhe, {lei:lei});
  }

}
