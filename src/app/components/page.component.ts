import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content /> `,
  styles: [
    `
      :host {
        padding: 5rem;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    `,
  ],
})
export class PageComponent {}
