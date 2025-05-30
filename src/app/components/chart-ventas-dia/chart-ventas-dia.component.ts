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
  selector: 'app-chart-ventas-dia',
  templateUrl: './chart-ventas-dia.component.html',
  styleUrls: ['./chart-ventas-dia.component.scss'],
  standalone: false,
})
export class ChartVentasDiaComponent implements OnInit {
  @Input() ventas: any;
  constructor() {}

  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;

    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
  } = {
    series: [],
    chart: {
      type: 'bar',
      height: 200,
      zoom: {
        enabled: false,
      },
    },

    title: {
      text: 'Entradas vendidas por día de la semana',
      style: {
        fontFamily: 'Quicksand',
      },
    },

    xaxis: {
      title: {
        text: 'Días de la semana',
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
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  ngOnInit() {
    const dias = [
      { es: 'Lunes', en: 'Monday' },
      { es: 'Martes', en: 'Tuesday' },
      { es: 'Miércoles', en: 'Wednesday' },
      { es: 'Jueves', en: 'Thursday' },
      { es: 'Viernes', en: 'Friday' },
      { es: 'Sábado', en: 'Saturday' },
      { es: 'Domingo', en: 'Sunday' },
    ];
    setTimeout(() => {
      if (this.ventas) {
        this.chartOptions.series = [
          {
            name: 'Entradas vendidas',
            data: dias.map((dia: any) => ({
              x: dia.es,
              y: this.ventas[dia.en],
            })),
          },
        ];
      }
    }, 200);
  }
}
