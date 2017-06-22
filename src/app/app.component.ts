import { Component } from '@angular/core';

import { HostService } from 'app/host.service';
import { DataService } from 'app/data.service';
import { GetDataService } from 'app/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HostService, DataService, GetDataService]
})
export class AppComponent {
  title = 'System Load Monitor';
}
