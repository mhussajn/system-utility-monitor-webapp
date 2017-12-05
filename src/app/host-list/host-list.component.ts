import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

import { SelectHostService } from '../select-host.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  hosts: String[] = [];

  constructor(private listData: ListDataService) { }

  ngOnInit() {
    this.listData.getList().subscribe(list => this.hosts = list);
  }
}
