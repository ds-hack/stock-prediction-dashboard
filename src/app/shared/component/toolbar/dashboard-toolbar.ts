import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-toolbar',
  styleUrls: ['dashboard-toolbar.scss'],
  templateUrl: 'dashboard-toolbar.html',
})
export class DashboardToolbarComponent implements OnInit {
    showSidenav: boolean;

    ngOnInit(): void {
        this.showSidenav = false;
    }

    toggleSidenav(): void {
        this.showSidenav = !this.showSidenav;
    }
}
