import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-top-concerts',
  templateUrl: './top-concerts.page.html',
  styleUrls: ['./top-concerts.page.scss'],
  standalone: false,
})
export class TopConcertsPage implements OnInit {
  concerts: any;
  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    const data: any = await this.getData();
    this.concerts = data.top_10_conciertos_por_venta_entradas;
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

  navigateTo(concert: any) {
    if (concert?.ventas?.Aviso) {
      this.toastController
        .create({
          mode: 'ios',
          message: 'Sin datos de ventas',
          duration: 3000,
          buttons: [{ role: 'cancel', icon: 'close' }],
        })
        .then((toast) => toast.present())
        .catch((error) => {
          console.error(error);
        });
    } else {
      let queryParams = {
        id: concert.idConcierto,
      };
      this.navController.navigateForward('concert', { queryParams });
    }
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}
