import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-closed-host-list',
  templateUrl: './closed-host-list.component.html',
  styleUrls: ['./closed-host-list.component.css']
})
export class ClosedHostListComponent implements OnInit {

  closedHosts: String[] = [];

  constructor(private listData: ListDataService) { }

  ngOnInit() {
    this.listData.getList().subscribe(list => this.closedHosts = list);
  }
}
