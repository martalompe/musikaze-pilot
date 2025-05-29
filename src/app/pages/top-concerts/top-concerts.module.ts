import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopConcertsPageRoutingModule } from './top-concerts-routing.module';

import { TopConcertsPage } from './top-concerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopConcertsPageRoutingModule
  ],
  declarations: [TopConcertsPage]
})
export class TopConcertsPageModule {}
