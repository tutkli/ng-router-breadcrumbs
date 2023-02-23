import { Routes } from '@angular/router';
import { continentRoutes } from './continent.routes';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('src/app/pages/home.component'),
      },
      ...continentRoutes,
    ],
    data: { breadcrumb: 'Home' },
  },
];
