import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopConcertsPage } from './top-concerts.page';

const routes: Routes = [
  {
    path: '',
    component: TopConcertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopConcertsPageRoutingModule {}
