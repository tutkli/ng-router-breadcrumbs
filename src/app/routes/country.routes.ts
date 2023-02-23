import { Routes } from '@angular/router';

export const EuropeCountries = {
  spain: 'spain',
  romania: 'romania',
  belgium: 'belgium',
  germany: 'germany',
  france: 'france',
};

export const europeRoutes: Routes = [
  {
    path: EuropeCountries.spain,
    loadComponent: () => import('src/app/pages/country.component'),
    data: { breadcrumb: EuropeCountries.spain },
  },
  {
    path: EuropeCountries.romania,
    loadComponent: () => import('src/app/pages/country.component'),
    data: { breadcrumb: EuropeCountries.romania },
  },
  {
    path: EuropeCountries.belgium,
    loadComponent: () => import('src/app/pages/country.component'),
    data: { breadcrumb: EuropeCountries.belgium },
  },
  {
    path: EuropeCountries.germany,
    loadComponent: () => import('src/app/pages/country.component'),
    data: { breadcrumb: EuropeCountries.germany },
  },
  {
    path: EuropeCountries.france,
    loadComponent: () => import('src/app/pages/country.component'),
    data: { breadcrumb: EuropeCountries.france },
  },
];
