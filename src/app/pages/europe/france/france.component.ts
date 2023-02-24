import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-france',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>France</h1> `,
  styles: [],
})
export default class FranceComponent {}
