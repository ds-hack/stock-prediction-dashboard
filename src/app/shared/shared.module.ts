import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DshackSimpleLayoutComponent } from './component/layout/dshack-simple-layout.component';
import { DashboardToolbarComponent } from './component/toolbar/dashboard-toolbar.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
  ],
  exports: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
  ]
})
export class SharedModule {
}
