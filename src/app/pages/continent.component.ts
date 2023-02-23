import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-continent',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>Continents</h1> `,
  styles: [],
})
export default class ContinentComponent {
  private router = inject(Router);

  page$ = new BehaviorSubject<string>('');
}
