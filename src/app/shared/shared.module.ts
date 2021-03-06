import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';

import { DshackSimpleLayoutComponent } from './component/layout/dshack-simple-layout.component';
import { DashboardToolbarComponent } from './component/toolbar/dashboard-toolbar.component';
import { CandleStickChartComponent } from './component/candlestick/candle-stick-chart.component';
import { StickyTableComponent } from './component/sticky-table/sticky-table.component';

PlotlyModule.plotlyjs = PlotlyJS;

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
    MatTableModule,
    MatToolbarModule,
    PlotlyModule,
  ],
  declarations: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
    CandleStickChartComponent,
    StickyTableComponent,
  ],
  exports: [
    DshackSimpleLayoutComponent,
    DashboardToolbarComponent,
    CandleStickChartComponent,
    StickyTableComponent,
  ]
})
export class SharedModule {
}
