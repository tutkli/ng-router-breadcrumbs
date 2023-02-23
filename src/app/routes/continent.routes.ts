import { Routes } from '@angular/router';
import { europeRoutes } from './country.routes';

export const Continents = {
  asia: 'asia',
  europe: 'europe',
  oceania: 'oceania',
  africa: 'africa',
  north_america: 'north-america',
  south_america: 'south-america',
  antarctica: 'antarctica',
};

export const continentRoutes: Routes = [
  {
    path: Continents.asia,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.asia },
  },
  {
    path: Continents.europe,
    children: [
      {
        path: '',
        loadComponent: () => import('src/app/pages/continent.component'),
      },
      ...europeRoutes,
    ],
    data: { breadcrumb: Continents.europe },
  },
  {
    path: Continents.oceania,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.oceania },
  },
  {
    path: Continents.africa,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.africa },
  },
  {
    path: Continents.north_america,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.north_america },
  },
  {
    path: Continents.south_america,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.south_america },
  },
  {
    path: Continents.antarctica,
    loadComponent: () => import('src/app/pages/continent.component'),
    data: { breadcrumb: Continents.antarctica },
  },
];
