import { Routes } from '@angular/router';

export const africaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/pages/africa/africa.component'),
  },
  {
    path: 'equatorial-guinea',
    loadComponent: () =>
      import(
        'src/app/pages/africa/equatorial-guinea/equatorial-guinea.component'
      ),
    data: { breadcrumb: 'Equatorial Guinea' },
  },
  {
    path: 'south-africa',
    loadComponent: () =>
      import('src/app/pages/africa/south-africa/south-africa.component'),
    data: { breadcrumb: 'South Africa' },
  },
];
