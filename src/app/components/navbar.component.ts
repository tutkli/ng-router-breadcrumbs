import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button routerLink="/home">Home</button>
    <button routerLink="/home/europe">Europe</button>
    <button routerLink="/home/europe/spain">Spain</button>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class NavbarComponent {}
