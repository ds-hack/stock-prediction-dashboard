import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { InsightsDemoComponent } from './insights-demo/insights-demo.component';
import { InsightsDemoOverviewComponent } from './insights-demo/container/insights-overview/insights-overview.component';
import { InsightsDemoCandleStickComponent } from './insights-demo/container/candlestick/candlestick.component';
import { InsightsDemoOhlcTableComponent } from './insights-demo/container/ohlc-table/ohlc-table.component';
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
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    DemoComponent,
    InsightsDemoComponent,
    InsightsDemoOverviewComponent,
    InsightsDemoCandleStickComponent,
    InsightsDemoOhlcTableComponent,
    InsightsDemoPriceIndexComponent,
    PredictionsDemoComponent,
  ],
})
export class DemoModule {
}
