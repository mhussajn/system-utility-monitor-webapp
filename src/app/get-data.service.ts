import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetDataService {

  constructor(private _http: Http) { }

  getContainers(url:string){
    return this._http.get(url)
      .map((response:Response)=>response.json());
  }

}
