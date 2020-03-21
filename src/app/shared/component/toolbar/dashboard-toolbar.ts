import { Component } from '@angular/core';

import { SidenavService } from '../../../core/service/sidenav.service';

@Component({
  selector: 'app-dashboard-toolbar',
  styleUrls: ['dashboard-toolbar.scss'],
  templateUrl: 'dashboard-toolbar.html',
})
export class DashboardToolbarComponent {

  constructor(private sidenavService: SidenavService) {}

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  // TODO: 各ページコンポーネントのngOnInitメソッドに処理を移す。
  changeSidenavMenu(menu: string) {
    this.sidenavService.changeMenu(menu);
  }
}
