import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../../components/page.component';

@Component({
  selector: 'app-spain',
  standalone: true,
  imports: [PageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page>
      <h1>Spain</h1>
      <img
        src="https://flagicons.lipis.dev/flags/4x3/es.svg"
        width="300px"
        alt="Spanish Flag" />
    </app-page>
  `,
  styles: [],
})
export default class SpainComponent {}
