import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>Europe</h1> `,
  styles: [],
})
export default class EuropeComponent {}
