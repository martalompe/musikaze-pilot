import { Component, Input, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-publico-provincia-map',
  templateUrl: './publico-provincia-map.component.html',
  styleUrls: ['./publico-provincia-map.component.scss'],
  standalone: false,
})
export class PublicoProvinciaMapComponent implements OnInit {
  @Input() data!: Record<
    string,
    { cantidad: number; latitud: number; longitud: number }
  >;

  private map: L.Map | undefined;
  constructor(
    private navController: NavController,
    private toastController: ToastController
  ) {}

  ngAfterViewInit(): void {
    setTimeout(async () => {
      this.map = L.map('map2').setView([40.4168, -3.7038], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      if (this.data) {
        Object.entries(this.data).forEach(([provincia, datos]) => {
          const marker = L.marker([datos.longitud, datos.latitud], {
            icon: L.icon({
              iconUrl: `assets/icon/marker-icon-green.svg`,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            }),
          })
            .addTo(this.map!)
            .bindPopup(`<b>${provincia}</b><br>${datos.cantidad} personas`);
        });
      }
    }, 250);
  }

  ngOnInit() {
    console.log('data conciertos', this.data);
  }
}
