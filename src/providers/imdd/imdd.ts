import { Http } from "@angular/http"
import { Injectable } from '@angular/core';


@Injectable()
export class ImddProvider {

  basePathUrl = "http://www.omdbapi.com/?";

  constructor(public http: Http) { }

  

  getID(id){
    return this.http.get(this.basePathUrl+this.getApiKey()+"&i="+id)
  }

  getApiKey() {
    return "apikey=1c49a45"
  }

}
