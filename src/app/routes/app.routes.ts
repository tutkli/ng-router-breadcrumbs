import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
        data: { breadcrumb: 'root' },
      },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/routes/home.routes').then(mod => mod.homeRoutes),
        data: { breadcrumb: 'Home' },
      },
      {
        path: 'europe',
        loadChildren: () =>
          import('src/app/routes/europe.routes').then(mod => mod.europeRoutes),
        data: { breadcrumb: 'Europe' },
      },
      {
        path: 'africa',
        loadChildren: () =>
          import('src/app/routes/africa.routes').then(mod => mod.africaRoutes),
        data: { breadcrumb: 'Africa' },
      },
    ],
  },
];
