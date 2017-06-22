import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { GetDataService } from 'app/get-data.service';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})

export class ContainerListComponent implements OnInit {
  containers=[]

  url = 'http://localhost:5000/list-containers/'+this.dataService.data;

  constructor(
    private _getDataService: GetDataService,
    private router:Router,
    private location: Location,
    private dataService:DataService) { }

  ngOnInit() {
    this._getDataService.getContainers(this.url).subscribe(resContainerData=>this.containers=resContainerData);
  }

  goBack(): void{
    this.location.back();
  }

}
