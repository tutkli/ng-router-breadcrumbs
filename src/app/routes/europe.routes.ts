import { Routes } from '@angular/router';

export const europeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/pages/europe/europe.component'),
  },
  {
    path: 'spain',
    loadComponent: () => import('src/app/pages/europe/spain/spain.component'),
    data: { breadcrumb: 'Spain' },
  },
  {
    path: 'romania',
    loadComponent: () =>
      import('src/app/pages/europe/romania/romania.component'),
    data: { breadcrumb: 'Romania' },
  },
  {
    path: 'france',
    loadComponent: () => import('src/app/pages/europe/france/france.component'),
    data: { breadcrumb: 'France' },
  },
];
