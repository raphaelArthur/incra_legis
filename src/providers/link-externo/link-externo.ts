import { Injectable } from '@angular/core';

/*
  Generated class for the LinkExternoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface tipo_lei{
  tipo:string;
  numero:number;
}

@Injectable()
export class LinkExternoProvider {

  constructor() {
    console.log('Hello LinkExternoProvider Provider');
  }

}
