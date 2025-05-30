import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexTooltip,
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
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    labels: string[];
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
  } = {
    dataLabels: {
      enabled: false,
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

    xaxis: {
      title: {
        // text: 'Días de la semana',
        style: {
          fontFamily: 'Quicksand',
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
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
