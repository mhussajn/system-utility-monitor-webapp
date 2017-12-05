import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-closed-host',
  templateUrl: './closed-host.component.html',
  styleUrls: ['./closed-host.component.css']
})
export class ClosedHostComponent implements OnInit {
  @Input() closedHost: String;

  constructor() { }

  ngOnInit() {
  }

}
