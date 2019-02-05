import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ImddProvider} from '../../providers/imdd/imdd'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ImddProvider]
})
export class HomePage {
  id_movie;
  objRet = null;

  constructor(public imdbService : ImddProvider) {
    this.search();
  }

  search(){
    this.imdbService.getID(this.id_movie).subscribe(
      (data: any)=>{
         this.carregar(JSON.parse(data._body));
          }, error=>{
        console.log(error);
      }
    );
  }

  carregar(data){
    this.objRet = data;
    console.log(this.objRet)
  }
  
}
