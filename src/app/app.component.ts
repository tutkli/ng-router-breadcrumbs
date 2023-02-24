import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/">Angular Router Breadcrumbs</a>
    </mat-toolbar>

    <main>
      <app-breadcrumb />
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        padding: 1rem;
      }
      a {
        text-decoration: none;
        color: white;
      }
    `,
  ],
})
export class AppComponent {}
