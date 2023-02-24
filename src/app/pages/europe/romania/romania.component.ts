import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-romania',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>Romania</h1> `,
  styles: [],
})
export default class RomaniaComponent {}
