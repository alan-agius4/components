/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Component, OnDestroy, ViewEncapsulation, inject} from '@angular/core';

import {AnalyticsService} from './shared/analytics/analytics';
import {NavigationFocusService} from './shared/navigation-focus/navigation-focus.service';
import {Subscription} from 'rxjs';
import {map, pairwise, startWith} from 'rxjs/operators';
import {RouterOutlet} from '@angular/router';
import {NavBar} from './shared/navbar/navbar';
import {CookiePopup} from './shared/cookie-popup/cookie-popup';

@Component({
  selector: 'material-docs-app',
  template: `
    <app-cookie-popup/>
    <app-navbar/>
    <router-outlet/>
  `,
  styleUrls: ['./material-docs-app.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NavBar, RouterOutlet, CookiePopup],
})
export class MaterialDocsApp implements OnDestroy {
  private _subscriptions = new Subscription();

  constructor() {
    const analytics = inject(AnalyticsService);
    const navigationFocusService = inject(NavigationFocusService);

    this._subscriptions.add(
      navigationFocusService.navigationEndEvents
        .pipe(
          map(e => e.urlAfterRedirects),
          startWith(''),
          pairwise(),
        )
        .subscribe(([fromUrl, toUrl]) => {
          // We want to reset the scroll position on navigation except when navigating within
          // the documentation for a single component.
          if (!navigationFocusService.isNavigationWithinComponentView(fromUrl, toUrl)) {
            resetScrollPosition();
          }
          analytics.locationChanged(toUrl);
        }),
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
