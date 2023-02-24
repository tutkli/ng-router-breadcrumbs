import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../components/page.component';
import { NavbarComponent } from '../../components/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [PageComponent, NavbarComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Welcome to Africa</h1>
      <app-navbar>
        <a routerLink="equatorial-guinea">Equatorial Guinea</a>
        <span>Egypt</span>
        <span>Morocco</span>
        <a routerLink="south-africa">South Africa</a>
      </app-navbar>
    </app-page>
  `,
  styles: [],
})
export default class AfricaComponent {}
