import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DshackSimpleLayoutComponent } from './component/layout/dshack-simple-layout';
import { DashboardToolbarComponent } from './component/toolbar/dashboard-toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent
  ],
  exports: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
  ]
})
export class SharedModule {
}
