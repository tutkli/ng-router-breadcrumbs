import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../../components/page.component';

@Component({
  selector: 'app-romania',
  standalone: true,
  imports: [PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Romania</h1>
      <img
        src="https://flagicons.lipis.dev/flags/4x3/ro.svg"
        width="300px"
        alt="Romanian Flag" />
    </app-page>
  `,
  styles: [],
})
export default class RomaniaComponent {}
