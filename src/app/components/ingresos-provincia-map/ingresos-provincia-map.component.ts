import { Component, Input, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-ingresos-provincia-map',
  templateUrl: './ingresos-provincia-map.component.html',
  styleUrls: ['./ingresos-provincia-map.component.scss'],
  standalone: false,
})
export class IngresosProvinciaMapComponent implements OnInit {
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
      this.map = L.map('map').setView([40.4168, -3.7038], 5);

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
            .bindPopup(
              `<b>${provincia}</b><br>Ingresos: ${this.formatPrice(
                datos.cantidad
              )}`
            );
        });
      }
    }, 500);
  }

  ngOnInit() {
    console.log('data conciertos', this.data);
  }

  formatPrice(valor: any): string {
    if (typeof valor !== 'number' || isNaN(valor)) return '';
    const fixed = valor.toFixed(2);
    let [entero, decimal] = fixed.split('.');
    entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${entero},${decimal}€`;
  }
}
