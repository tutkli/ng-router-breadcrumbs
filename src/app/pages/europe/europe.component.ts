import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar.component';
import { RouterLink } from '@angular/router';
import { PageComponent } from '../../components/page.component';

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [NavbarComponent, RouterLink, PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Welcome to Europe</h1>
      <app-navbar>
        <a routerLink="spain">Spain</a>
        <a routerLink="france">France</a>
        <span>Germany</span>
        <a routerLink="romania">Romania</a>
        <span>Belgium</span>
      </app-navbar>
    </app-page>
  `,
  styles: [],
})
export default class EuropeComponent {}
