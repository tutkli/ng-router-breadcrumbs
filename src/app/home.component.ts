import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h1>Home</h1>
  `,
    styles: [],
})
export default class HomeComponent {}
