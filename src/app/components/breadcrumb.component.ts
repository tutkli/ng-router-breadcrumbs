import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  RouterOutlet,
  UrlSegment,
} from '@angular/router';
import { BehaviorSubject, filter, startWith, Subject, takeUntil } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    NgForOf,
    NgIf,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    TitleCasePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container
      *ngFor="let breadcrumb of breadcrumbs$ | async; let last = last">
      <button mat-button [routerLink]="breadcrumb.url">
        {{ breadcrumb.label | titlecase }}
      </button>
      <button mat-icon-button *ngIf="!last">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </ng-container>
  `,
  styles: [
    `
      :host {
        margin: 1rem;
        border: 1px #ddd solid;
        padding: 0.2rem 0.5rem;
        display: flex;
        gap: 0.25rem;
        align-items: center;
      }
    `,
  ],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  @Input() routeLabel = 'breadcrumb';
  @Input() separator = '/';

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  private _onDestroy$ = new Subject<void>();

  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  ngOnInit(): void {
    this.subscribeToRouterChange();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  private subscribeToRouterChange(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._onDestroy$),
        startWith(true)
      )
      .subscribe({
        next: () => {
          this.breadcrumbs$.next(this.getBreadcrumbs(this.activatedRoute.root));
        },
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      const routeUrl: string = child.snapshot.url
        .map((segment: UrlSegment) => segment.path)
        .filter((path: string) => path)
        .join('/');

      const breadcrumbUrl = routeUrl ? `${url}/${routeUrl}` : url;
      const breadcrumbLabel = child.snapshot.data[this.routeLabel];

      if (routeUrl && breadcrumbLabel) {
        const breadcrumb: Breadcrumb = {
          label: breadcrumbLabel,
          url: breadcrumbUrl,
        };
        breadcrumbs.push(breadcrumb);
      }

      return this.getBreadcrumbs(child, breadcrumbUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}
