import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.page.html',
  styleUrls: ['./concerts.page.scss'],
  standalone: false,
})
export class ConcertsPage implements OnInit {
  data: any;
  constructor() {}

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
}
