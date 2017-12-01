import { Component, OnInit } from '@angular/core';
import { HostService } from 'app/host.service';
import { Router } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {
  hosts=[]
  selectedHost:string;

  constructor(
    private _hostService: HostService,
    private router:Router,
    private dataService:DataService) { }

  gotoContainer(host):void {
    this.dataService.data=host;
    this.router.navigate(['host',host]);
  }

  ngOnInit() {
    this._hostService.getHosts().subscribe(resultHostsData => this.hosts=resultHostsData);
  }


}
