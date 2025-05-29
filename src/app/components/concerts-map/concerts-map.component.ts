import { Component, Input, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-concerts-map',
  templateUrl: './concerts-map.component.html',
  styleUrls: ['./concerts-map.component.scss'],
  standalone: false,
})
export class ConcertsMapComponent implements OnInit {
  @Input() data: any = {};

  private map: L.Map | undefined;
  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) {}

  ngAfterViewInit(): void {
    setTimeout(async () => {
      this.map = L.map('map').setView([40.4168, -3.7038], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      const datos = [
        ...this.data['A Caché'].map((c: any) => ({ ...c, grupo: 'A Caché' })),
        ...this.data['A Empresa'].map((c: any) => ({
          ...c,
          grupo: 'A Empresa',
        })),
      ];
      for (const concierto of datos) {
        const color = concierto.grupo === 'A Caché' ? 'gray' : 'green';
        this.addMarker(color, concierto);
        // await this.delay(1200);
        // await this.getCoordinates(concierto);
      }
    }, 250);
  }
  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  ngOnInit() {
    console.log('data conciertos', this.data);
  }

  // getCoordinates(concert: any) {
  //   const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
  //     concert.localidad
  //   )}`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data && data.length > 0) {
  //         const firstResult = data[0];
  //         const lat = firstResult.lat;
  //         const long = firstResult.lon;
  //         const color = concert.grupo === 'A Caché' ? 'gray' : 'green';
  //         this.addMarker(lat, long, color, concert);
  //       } else {
  //         console.error(
  //           'No se encontraron coordenadas para la dirección proporcionada'
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener las coordenadas:', error);
  //     });
  // }

  addMarker(color: string, concert: any): void {
    const marker = L.marker([concert.latitud, concert.longitud], {
      icon: L.icon({
        iconUrl: `assets/icon/marker-icon-${color}.svg`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      }),
    }).addTo(this.map!);

    const popupContent = `<a href="#" class="popup-link" data-localidad="${concert.localidad}"><strong>${concert.localidad}</strong></a>`;
    marker.bindPopup(popupContent);

    // Escucha el evento cuando se abre el popup
    marker.on('popupopen', () => {
      setTimeout(() => {
        const link = document.querySelector('.popup-link');
        if (link) {
          // Primero eliminamos cualquier listener anterior
          const newLink = link.cloneNode(true);
          link.parentNode?.replaceChild(newLink, link);

          newLink.addEventListener('click', (event: any) => {
            event.preventDefault();
            this.navigateTo(concert);
          });
        }
      }, 0); // Aseguramos que el DOM esté disponible
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
}
