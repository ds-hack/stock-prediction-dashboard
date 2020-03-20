import { Component } from '@angular/core';

@Component({
  selector: 'app-dshack-simple-layout',
  styleUrls: ['dshack-simple-layout.scss'],
  template: `
    <ng-content select="app-dashboard-toolbar"></ng-content>
    <ng-content select="app-dashboard-sidenav"></ng-content>
    <ng-content select="router-outlet"></ng-content>
  `,
})
export class DshackSimpleLayoutComponent {
}
