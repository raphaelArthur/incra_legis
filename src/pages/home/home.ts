import { Component } from '@angular/core';
import { IonicPage, Nav, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as papa from 'papaparse';
// import { Pages } from '../pages';
import { Lei } from '../../models/modelo_lei';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface tipo_lei{
  tipo:string;
  numero:number;
}
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  readonly tipo = 0;
  readonly ato = 1;
  readonly descricao = 2;
  readonly lei = 3;
  readonly link = 4;

  csvData: any[] = [];
  headerRow: any[] = [];

  array_leis:any = [];
  array_tipo:Array<tipo_lei> = [];
  num_tipo:number = 0;

  lista_geral = [];

  constructor(public navCtrl: Nav, public navParams: NavParams, public http: Http,) {
    this.num_tipo = 0;
  }

  ionViewDidLoad() {
    this.readCsvData();

  }

  public readCsvData() {
    return new Promise ((resolve) => {
      this.http.get('assets/base_local_geral.csv')
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
      resolve();
    });
  }

  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData, {delimiter:";"}).data;
 
    this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.csvData = parsedData;

    // console.log(this.csvData);
    var contador = 0;

    for(let i =0; i < this.csvData.length; i++)
    {
      let dados = {
        tipo: this.csvData[i][this.tipo],
        ato: this.csvData[i][this.ato],
        descricao: this.csvData[i][this.descricao],
        lei: this.csvData[i][this.lei],
        link: this.csvData[i][this.link],
      };
      
      if(i > 0)
      {
        contador++;
        if(this.csvData[i][this.tipo] != this.csvData[i-1][this.tipo] )
        {
          let temp_tipo = {tipo:dados.tipo, numero:this.num_tipo };
          this.array_tipo.push(temp_tipo);
          this.num_tipo++;
        }
      }
      else
      {
        contador++;       
        let temp_tipo = {tipo:dados.tipo, numero:this.num_tipo };
        this.array_tipo.push(temp_tipo);
        this.num_tipo++;
      }

      this.lista_geral.push( new Lei(dados) );

      

      // if(i > 0)
      // {
      //   contador++;
      //   if(this.csvData[i][this.tipo] != this.csvData[i-1][this.tipo] )
      //   {
      //     let temp = new Lei(dados);
      //     this.array_leis.push(temp);
      //     let temp_tipo = {tipo:dados.tipo, numero:this.num_tipo };
      //     this.array_tipo.push(temp_tipo);
      //     this.num_tipo++;
      //   }
      //   else
      //   {
      //     let ult_index = this.array_leis.length-1;
      //     this.array_leis[ult_index].addInfo(dados);
      //   }
      // }
      // else
      // {
      //   contador++;
      //   let temp = new Lei(dados);
      //   this.array_leis.push(temp);
        
      //   let temp_tipo = {tipo:dados.tipo, numero:this.num_tipo };
      //   this.array_tipo.push(temp_tipo);
      //   this.num_tipo++;
      // }
    }

    // console.log(this.array_leis);
    // console.log(this.array_tipo);
    
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  private navegar(pagina:any)
  {
    if(pagina == "SumarioMenuPage" || pagina == "GeralListaPage")
    {
      this.navCtrl.push(pagina, {lista_geral:this.lista_geral, array_tipo:this.array_tipo});
    }
    else
    {
      this.navCtrl.push(pagina);
    }
    
  }

}
