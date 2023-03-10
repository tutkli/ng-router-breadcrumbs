import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content /> `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1rem;
        font-size: 2rem;
      }
    `,
  ],
})
export class NavbarComponent {}
