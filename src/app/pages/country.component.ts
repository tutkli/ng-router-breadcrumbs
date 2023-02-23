import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>Countries</h1> `,
  styles: [],
})
export default class CountryComponent {}
