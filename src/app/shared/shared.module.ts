import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DshackSimpleLayoutComponent } from './component/layout/dshack-simple-layout';
import { DashboardToolbarComponent } from './component/toolbar/dashboard-toolbar';
import { DashboardSidenavComponent } from './component/sidenav/dashboard-sidenav';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
    DashboardSidenavComponent,
  ],
  exports: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
    DashboardSidenavComponent,
  ]
})
export class SharedModule {
}
