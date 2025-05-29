import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcertsPageRoutingModule } from './concerts-routing.module';

import { ConcertsPage } from './concerts.page';
import { ConcertsMapComponent } from 'src/app/components/concerts-map/concerts-map.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ConcertsPageRoutingModule],
  declarations: [ConcertsPage, ConcertsMapComponent],
})
export class ConcertsPageModule {}
