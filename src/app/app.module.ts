import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { HostListComponent } from './host-list/host-list.component';
import { ChartComponent } from './chart/chart.component';
import { ContainerListComponent } from './container-list/container-list.component';

declare var require: any;
export function highchartsFactory() {
  var hc = require('highcharts');
  var hcm = require('highcharts/highcharts-more');
  hcm(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    HostListComponent,
    ChartComponent,
    ContainerListComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ChartModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
