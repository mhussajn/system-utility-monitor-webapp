import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';
import { Observable } from 'rxjs/Observable';

import { UsageDataService } from '../usage-data.service';
// import { SelectHostService } from '../select-host.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  constructor(private usageData: UsageDataService) {}
                // private selectedHost: SelectHostService) {}

  selectedInList: string;

  @ViewChild('myChart') myChart: jqxChartComponent;

  data: any[] = [];
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };
  xAxis: any =
  {
      dataField: 'timestamp',
      type: 'date',
      baseUnit: 'second',
      unitInterval: 5,
      formatFunction: (value: any) => {
          return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
      },
      gridLines: { step: 2 },
      valuesOnTicks: true,
      labels: { angle: -45, offset: { x: -17, y: 0 } }
  };
  valueAxis: any =
  {
      minValue: 0,
      maxValue: 100,
      title: { text: 'Index Value' },
      labels: { horizontalAlignment: 'right' }
  };
  seriesGroups: any[] =
  [
      {
          type: 'splinearea',
          alignEndPointsWithIntervals: true,
          valueAxis:
          {
              minValue: 0,
              maxValue: 100,
              title: { text: 'Cpu usage (%)' },
          },
          series: [
              { dataField: 'value1', displayText: 'Core 1',
              opacity: 0.7, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 },
              { dataField: 'value2', displayText: 'Core 2',
              opacity: 0.7, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 },
              { dataField: 'value3', displayText: 'Core 3',
              opacity: 0.7, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 },
              { dataField: 'value4', displayText: 'Core 4',
              opacity: 0.7, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 },
          ]
      }
  ];

  ngAfterViewInit(): void {
      const data = this.myChart.source();
      const timer = setInterval(() => {
          if (data.length >= 100) {data.splice(0, 1); }
          const timestamp = new Date();
          timestamp.setSeconds(timestamp.getSeconds());
          timestamp.setMilliseconds(0);
          this.usageData.getData().subscribe( point => {
              data.push({
                  timestamp: timestamp,
                  value1: point[0],
                  value2: point[1],
                  value3: point[2],
                  value4: point[3],
              });
          });
          this.myChart.update();
        //   this.selectedInList = this.selectedHost.selectedHost;
      }, 1000);
  }
}
