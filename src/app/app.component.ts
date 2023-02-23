import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbComponent,
    MatToolbarModule,
    NavbarComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar color="primary">
      <span>Angular Router Breadcrumbs</span>
    </mat-toolbar>

    <app-breadcrumb></app-breadcrumb>
    <app-navbar />
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
