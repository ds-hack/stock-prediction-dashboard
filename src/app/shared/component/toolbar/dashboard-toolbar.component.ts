import { Component } from '@angular/core';

import { SidenavService } from '../../../core/service/app/sidenav.service';

@Component({
  selector: 'app-dashboard-toolbar',
  styleUrls: ['dashboard-toolbar.component.scss'],
  templateUrl: 'dashboard-toolbar.component.html',
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
