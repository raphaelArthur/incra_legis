import { Injectable } from '@angular/core';

/*
  Generated class for the FiltroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FiltroProvider {

  public items: any = [];

  constructor() {
    let items2 = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
    this.items = [];
    console.log(items2);
  }

  filterItems(searchTerm, key) {
    return this.items.filter(item => {
      if(key == "tipo")
      {
        return item.tipo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }
      return item.conteudo[key].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      // 
    });
  }

  setLista(lista:any){
    this.items = lista;
    console.log(lista);
  }

}
