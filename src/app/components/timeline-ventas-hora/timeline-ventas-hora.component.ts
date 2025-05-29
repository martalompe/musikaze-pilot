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
  selector: 'app-timeline-ventas-hora',
  templateUrl: './timeline-ventas-hora.component.html',
  styleUrls: ['./timeline-ventas-hora.component.scss'],
  standalone: false,
})
export class TimelineVentasHoraComponent implements OnInit {
  @Input() ventas: any;
  constructor() {}

  chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
  } = {
    series: [],
    chart: {
      type: 'line',
      height: 200,
      zoom: {
        enabled: false,
      },
    },

    title: {
      text: 'Entradas vendidas por hora',
      style: {
        fontFamily: 'Quicksand',
      },
    },

    xaxis: {
      title: {
        text: 'Hora del día',
        style: {
          fontFamily: 'Quicksand',
        },
      },
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      tickAmount: 12,
    },
    tooltip: {
      enabled: true,
    },
  };

  ngOnInit() {
    setTimeout(() => {
      if (this.ventas) {
        this.chartOptions.series = [
          {
            name: 'Entradas vendidas',
            data: this.convertirDatosParaGrafico(this.ventas).data,
          },
        ];
      }
    }, 200);
  }
  convertirDatosParaGrafico(dataPorHora: Record<number, number>) {
    const labels: string[] = [];
    const data: number[] = [];

    for (let i = 0; i < 24; i++) {
      labels.push(`${i}:00`);
      data.push(dataPorHora[i] ?? 0); // Usa 0 si no hay dato para esa hora
    }

    return { labels, data };
  }
}
