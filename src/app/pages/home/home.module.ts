import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TableDataComponent } from 'src/app/components/table-data/table-data.component';
import { TableComplexComponent } from 'src/app/components/table-complex/table-complex.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, TableDataComponent, TableComplexComponent],
})
export class HomePageModule {}
