import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { InsightsDemoComponent } from './insights-demo/insights-demo.component';
import { InsightsDemoOverviewComponent } from './insights-demo/container/insights-overview/insights-overview.component';
import { InsightsDemoCandleStickComponent } from './insights-demo/container/candlestick/candlestick.component';
import { InsightsDemoOhlcTableComponent } from './insights-demo/container/ohlc-table/ohlc-table.component';
import { InsightsDemoPlotDialogComponent } from './insights-demo/container/plot-dialog/plot-dialog.component';
import { InsightsDemoPriceIndexComponent } from './insights-demo/container/price-index/price-index.component';
import { PredictionsDemoComponent } from './predictions-demo/predictions-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DemoRoutingModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    NgxChartsModule,
  ],
  declarations: [
    DemoComponent,
    InsightsDemoComponent,
    InsightsDemoOverviewComponent,
    InsightsDemoCandleStickComponent,
    InsightsDemoOhlcTableComponent,
    InsightsDemoPlotDialogComponent,
    InsightsDemoPriceIndexComponent,
    PredictionsDemoComponent,
  ],
})
export class DemoModule {
}
