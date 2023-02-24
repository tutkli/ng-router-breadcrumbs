import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar.component';
import { PageComponent } from '../components/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent, PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Angular Router Breadcrumbs</h1>

      <div>
        <p>
          This is a demo of a Breadcrumb component based on Angular's router
          config.
        </p>
        <p>
          Click on a breadcrumb label to see it's sibling routes. Click on the
          arrow to see their children routes.
        </p>
        <p>
          Navigate through the page to see the breadcrumb component in action!
        </p>
      </div>

      <app-navbar>
        <a routerLink="/europe">Europe</a>
        <span>America</span>
        <a routerLink="/africa">Africa</a>
        <span>Asia</span>
        <span>Oceania</span>
      </app-navbar>
    </app-page>
  `,
  styles: [],
})
export default class HomeComponent {}
