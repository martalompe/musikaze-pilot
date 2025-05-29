import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'concerts',
    loadChildren: () =>
      import('./pages/concerts/concerts.module').then(
        (m) => m.ConcertsPageModule
      ),
  },
  {
    path: 'top-concerts',
    loadChildren: () =>
      import('./pages/top-concerts/top-concerts.module').then(
        (m) => m.TopConcertsPageModule
      ),
  },
  {
    path: 'concert',
    loadChildren: () =>
      import('./pages/concert/concert.module').then((m) => m.ConcertPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
