import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListDataService {

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<String[]>('http://localhost:5000/hosts');
  }
}
