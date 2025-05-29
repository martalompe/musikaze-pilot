import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss'],
  standalone: false,
})
export class TableComplexComponent implements OnInit {
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

  formatPercentage(valor: any): string {
    if (!valor) return '';
    return `${valor}%`;
  }
}
