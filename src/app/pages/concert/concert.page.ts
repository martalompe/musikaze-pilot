import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
  standalone: false,
})
export class ConcertPage implements OnInit {
  concert: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(async (params) => {
      if (params['id']) {
        let idConcert = params['id'];
        const data: any = await this.getData();
        const concertsData = data.conciertos;
        const concerts = [
          ...concertsData['A Caché'],
          ...concertsData['A Empresa'],
        ];
        this.concert = concerts.find((c: any) => c.idConcierto == idConcert);
        console.log('concierto', this.concert);
      }
    });
  }

  ngOnInit() {}

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
