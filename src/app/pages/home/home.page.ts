import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor() {}
  data: any;
  selectedSegment: string = 'first';

  async ngOnInit() {
    this.data = await this.getData();
    console.log('DATA', this.data);
  }

  getData() {
    return new Promise((resolve, reject) => {
      fetch('assets/informe_gatibu.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar el JSON');
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject();
          console.error('Hubo un problema al obtener el JSON:', error);
        });
    });
  }

  formatPrice(valor: any): string {
    if (typeof valor !== 'number' || isNaN(valor)) return '';
    const fixed = valor.toFixed(2);
    let [entero, decimal] = fixed.split('.');
    entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${entero},${decimal}€`;
  }
}
