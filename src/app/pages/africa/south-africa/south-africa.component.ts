import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../../components/page.component';

@Component({
  selector: 'app-south-africa',
  standalone: true,
  imports: [PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>South Africa</h1>
      <img
        src="https://flagicons.lipis.dev/flags/4x3/za.svg"
        width="300px"
        alt="South African Flag" />
    </app-page>
  `,
  styles: [],
})
export default class SouthAfricaComponent {}
