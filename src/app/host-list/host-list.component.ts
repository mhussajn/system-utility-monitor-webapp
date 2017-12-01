import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  constructor(private listData: ListDataService) { }

  hosts = [];

  rhn() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit() {
    this.listData.getList().subscribe(list => this.hosts = list);
  }
}
