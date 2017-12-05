import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {
  @Input() host: String;

  constructor() { }

  ngOnInit() {
  }

}
