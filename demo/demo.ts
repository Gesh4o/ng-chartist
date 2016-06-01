import { Component } from '@angular/core';
import { ChartistComponent, ChartType } from './../angular2-chartist';

const data: any = require('./data.json');

interface Chart {
  type: ChartType;
  data: any;
  options?: any;
  responsiveOptions?: any;
}

@Component({
  selector: 'demo-app',
  directives: [ChartistComponent],
  templateUrl: './demo.template.html',
  styleUrls: ['./demo.styles.css']
})
export class DemoApp {
  charts: Array<Chart>;

  constructor() {
    this.charts = [{
      type: 'Bar',
      data: data['Bar']
    }, {
      type: 'Line',
      data: data['Line']
    }, {
      type: 'Line',
      data: data['Line2']
    }, {
      type: 'Line',
      data: data['Scatter'],
      options: {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value: number, index: number) {
            return index % 13 === 0 ? 'W' + value : null;
          }
        }
      },
      responsiveOptions: [
        ['screen and (min-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function(value: number, index: number) {
              return index % 4 === 0 ? 'W' + value : null;
            }
          }
        }]
      ]
    }, {
      type: 'Line',
      data: data['LineWithArea'],
      options: {
        low: 0,
        showArea: true
      }
    }, {
      type: 'Bar',
      data: data['Bi-PolarBar'],
      options: {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value: number, index: number) {
            return index % 2 === 0 ? value : null;
          }
        }
      }
    }, {
      type: 'Bar',
      data: data['DistributedSeries'],
      options: {
        distributeSeries: true
      }
    }, {
      type: 'Pie',
      data: data['Pie'],
      options: {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
      }
    }];
  }
}
