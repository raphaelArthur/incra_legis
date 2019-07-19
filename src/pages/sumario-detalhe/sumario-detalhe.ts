import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SumarioDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sumario-detalhe',
  templateUrl: 'sumario-detalhe.html',
})
export class SumarioDetalhePage {
  lei_detalhe:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lei_detalhe = this.navParams.get('lei');
    console.log(this.lei_detalhe);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SumarioDetalhePage');
  }

  ionViewWillEnter()
  {
    this.lei_detalhe = this.navParams.get('lei');
    // console.log(this.array_leis.conteudo);
  }

}
