import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-concerts',
  templateUrl: './top-concerts.page.html',
  styleUrls: ['./top-concerts.page.scss'],
  standalone: false,
})
export class TopConcertsPage implements OnInit {
  concerts: any;
  constructor() {}

  async ngOnInit() {
    const data: any = await this.getData();
    this.concerts = data.top_10_conciertos_por_venta_entradas;
    console.log('top conciertos', this.concerts);
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
}
