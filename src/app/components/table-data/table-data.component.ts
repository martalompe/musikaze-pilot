import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  standalone: false,
})
export class TableDataComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: any = {};

  constructor() {}

  ngOnInit() {}

  formatPrice(valor: any): string {
    if (typeof valor !== 'number' || isNaN(valor)) return '';
    const fixed = valor.toFixed(2);
    let [entero, decimal] = fixed.split('.');
    entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${entero},${decimal}€`;
  }
}
