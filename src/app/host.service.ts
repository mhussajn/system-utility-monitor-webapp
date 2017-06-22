import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HostService {

  constructor(private _http: Http) { }

  getHosts(){
    return this._http.get('http://localhost:5000/list-hosts')
      .map((response:Response)=>response.json());
  }

}
