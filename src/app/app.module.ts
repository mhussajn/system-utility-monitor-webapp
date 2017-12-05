import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { ListDataService } from './list-data.service';
import { UsageDataService } from './usage-data.service';
import { HostListComponent } from './host-list/host-list.component';
import { HostComponent } from './host/host.component';
import { ViewComponent } from './view/view.component';
import { ClosedHostListComponent } from './closed-host-list/closed-host-list.component';
import { ClosedHostComponent } from './closed-host/closed-host.component';


@NgModule({
  declarations: [
    AppComponent,
    jqxChartComponent,
    ChartComponent,
    HeaderComponent,
    HostListComponent,
    HostComponent,
    ViewComponent,
    ClosedHostListComponent,
    ClosedHostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListDataService, UsageDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
