import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcertPageRoutingModule } from './concert-routing.module';

import { ConcertPage } from './concert.page';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TimelineVentasHoraComponent } from 'src/app/components/timeline-ventas-hora/timeline-ventas-hora.component';
import { ChartVentasDiaComponent } from 'src/app/components/chart-ventas-dia/chart-ventas-dia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcertPageRoutingModule,
    NgApexchartsModule,
  ],
  declarations: [
    ConcertPage,
    TimelineVentasHoraComponent,
    ChartVentasDiaComponent,
  ],
})
export class ConcertPageModule {}
