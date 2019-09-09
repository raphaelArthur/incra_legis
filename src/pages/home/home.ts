import { Component } from '@angular/core';
import { IonicPage, Nav, NavParams, AlertController  } from 'ionic-angular';
import { Http } from '@angular/http';
import * as papa from 'papaparse';
import { InAppBrowser } from '@ionic-native/in-app-browser';


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
  //Variáveis que representam a coluna do CSV a ser lido.
  readonly tipo = 0;
  readonly data = 1;
  readonly ato = 2;
  readonly descricao = 3;
  readonly lei = 4;
  readonly link = 5;

  //Carregar informações do CSV.
  csvData: any[] = [];
  headerRow: any[] = [];

  //Array de leis
  array_leis:any = [];
  //Array do tipo das leis;
  array_tipo:Array<tipo_lei> = [];
  num_tipo:number = 0;

  //Lista das leis.
  lista_geral = [];
  lista_geral_ordenada = [];

  constructor(public navCtrl: Nav, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, private iab: InAppBrowser) {
    this.num_tipo = 0;
  }

  ionViewDidLoad() {
    this.readCsvData();

  }


  // downloadRevista() {
  //   const confirm = this.alertCtrl.create({
  //     title: 'Deseja fazer o download da "Revista de Direito Agrário"?',
  //     // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
  //     buttons: [
  //       {
  //         text: 'Não',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Sim',
  //         handler: () => {
  //           console.log('Agree clicked');
  //           const browser = this.iab.create('http://www.incra.gov.br/sites/default/files/uploads/publicacoes/revista_de_direito_agrario_-_no_22_-_ed._especial_30_anos_da_cf_de_1988_-_web.pdf');
  //           browser.show();
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  /***
   * Função que lê o arquivo: base_local_geral.csv que é a planilha de excel no formato CSV que contém as informações
   * a serem apresentadas em tela.
   */
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

  /***
   * Função que recebe o arquivo CSV e processa as informações.
   */
  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData, {delimiter:";"}).data;
 
    this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);
    this.csvData = parsedData;

    // console.log(this.csvData);
    var contador = 0;

    //Valor da prioridade de cada tipo de lei
    let dicionario = [
      {chave:"orientação", valor:0},
      {chave:"resolução", valor:0},
      {chave:"constituição", valor:100},
      {chave:"convenção", valor:90},
      {chave:"decreto-lei", valor:40},
      {chave:"complementar", valor:80},
      {chave:"delegada", valor:50},
      {chave:"legislativo", valor:30},
      {chave:"lei", valor:70},
      {chave:"decreto", valor:20},
      {chave:"medida", valor:60},
      {chave:"normativa", valor:10},
      {chave:"especial", valor:9},
      {chave:"execução", valor:5},
      {chave:"portaria", valor:4},
      
      // {chave:"outros", valor:30},
    ]
    //Monta as linhas do CSV como objeto para ser processado.
    for(let i = 0; i < this.csvData.length; i++)
    {
      let prioridade = 0;
      for(let palavra of dicionario)
      {
        if(this.csvData[i][this.lei].toLowerCase().includes(palavra.chave))
        {
          prioridade = palavra.valor;
          break;
        }
      }
      let dados = {
        tipo: this.csvData[i][this.tipo],
        ato: this.csvData[i][this.ato],
        descricao: this.csvData[i][this.descricao],
        lei: this.csvData[i][this.lei],
        link: this.csvData[i][this.link],
        prioridade: prioridade,
        data: this.csvData[i][this.data],
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
    }
    console.log(this.lista_geral)

    this.ordenarListaGeral();
  }

  /**
   * Função que ordena a lista de leis a partir de sua prioridade e data de publicação.
   */
  private ordenarListaGeral()
  {

    this.lista_geral_ordenada = this.lista_geral.sort((a, b) => {
      let a_split = a.conteudo.data.split("/");
      let b_split= b.conteudo.data.split("/");

      if(a.conteudo.prioridade > b.conteudo.prioridade) return -1;
      else if(a.conteudo.prioridade < b.conteudo.prioridade) return 1;
      else if(a_split[2] > b_split[2]) return 1;
      else if(a_split[2] < b_split[2]) return -1;
      else if(a_split[1] > b_split[1]) return 1;
      else if(a_split[1] < b_split[1]) return -1;
      else if(a_split[0] > b_split[0]) return 1;
      else if(a_split[0] < b_split[0]) return -1;
      else return 0;
    });

    console.log(this.lista_geral_ordenada);
    
    this.agruparLista();
  }

  /**
   * Função que agrupam as leis, pois uma lei pode pertecem a mais de um tipo, e assim aparecer duplicada na lista
   * geral.
   */
  private agruparLista()
  {
    let lista_bkp = this.lista_geral_ordenada;
    let flag = false;
    this.lista_geral_ordenada = [];
     
    for(let i = 0; i < lista_bkp.length; i++)
    {
      let dados = {
        tipo: lista_bkp[i].conteudo.tipo[0],
        ato: lista_bkp[i].conteudo.ato,
        descricao: lista_bkp[i].conteudo.descricao[0],
        lei: lista_bkp[i].conteudo.lei,
        link: lista_bkp[i].conteudo.link,
        prioridade: lista_bkp[i].conteudo.prioridade,
        data: lista_bkp[i].conteudo.data,
      };

      if(i > 0)
      {
        if(lista_bkp[i].conteudo.lei == lista_bkp[i-1].conteudo.lei)
        {
          this.lista_geral_ordenada[this.lista_geral_ordenada.length-1].addInfo(dados);
        }
        else
        {
          this.lista_geral_ordenada.push( new Lei(dados) );
        }
      }
      else
      {
        this.lista_geral_ordenada.push( new Lei(dados) );
      }
    }

    console.log(this.lista_geral_ordenada)
  }

  /**
   * Emite erro no console.
   * @param err Erro da leitura do CSV
   */
  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  /**
   * Função de navegação.
   * @param pagina String que contem o nome da classe da página que se deseja navegar.
   */
  private navegar(pagina:any)
  {
    if(pagina == "TemasPage" || pagina == "LegislacaoListaPage")
    {
      this.navCtrl.push(pagina, {lista_geral:this.lista_geral_ordenada, array_tipo:this.array_tipo});
    }
    else
    {
      this.navCtrl.push(pagina);
    }
    
  }

}
