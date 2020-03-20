import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dshack-simple-layout>
      <app-dashboard-toolbar></app-dashboard-toolbar>
      <app-dashboard-sidenav></app-dashboard-sidenav>
      <router-outlet></router-outlet>
    </app-dshack-simple-layout>
  `
})
export class AppComponent {
}
