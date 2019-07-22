import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-info',
  templateUrl: 'modal-info.html',
})
export class ModalInfoPage {
  public info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {
    this.info = this.navParams.get('info');
    this.info = this.info[0];
    console.log(this.info);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInfoPage');
  }

  public fechar()
  {
    this.viewCtrl.dismiss();
  }

}
