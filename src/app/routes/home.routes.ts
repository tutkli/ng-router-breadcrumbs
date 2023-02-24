import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/pages/home.component'),
  },
];
