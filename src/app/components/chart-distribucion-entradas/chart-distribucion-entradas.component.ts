import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexPlotOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'app-chart-distribucion-entradas',
  templateUrl: './chart-distribucion-entradas.component.html',
  styleUrls: ['./chart-distribucion-entradas.component.scss'],
  standalone: false,
})
export class ChartDistribucionEntradasComponent implements OnInit {
  @Input() ventas: any;
  constructor() {}

  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
  } = {
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10,
        },
      },
    },
    series: [],
    labels: [],
    chart: {
      type: 'pie',
      height: 200,
      zoom: {
        enabled: false,
      },
    },

    title: {
      text: 'Distribución compra de entradas',
      style: {
        fontFamily: 'Quicksand',
      },
    },

    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => `${val} personas`,
      },
    },
  };

  ngOnInit() {
    setTimeout(() => {
      if (this.ventas) {
        this.chartOptions.series = Object.values(this.ventas);
        this.chartOptions.labels = Object.entries(this.ventas).map(
          ([key, value]) => `${key} entrada${key === '1' ? '' : 's'}`
        );
      }
    }, 2000);
  }
}
