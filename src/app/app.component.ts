import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent],
  template: `
    <app-breadcrumb></app-breadcrumb>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
