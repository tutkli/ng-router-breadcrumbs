import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../../components/page.component';

@Component({
  selector: 'app-equatorial-guinea',
  standalone: true,
  imports: [PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Equatorial Guinea</h1>
      <img
        src="https://flagicons.lipis.dev/flags/4x3/gq.svg"
        width="300px"
        alt="Equatorial Guinean Flag" />
    </app-page>
  `,
  styles: [],
})
export default class EquatorialGuineaComponent {}
