import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { InsightsDemoComponent } from './insights-demo/insights-demo.component';
import { InsightsDemoOverviewComponent } from './insights-demo/container/insights-demo-overview/insights-demo-overview.component';
import { InsightsDemoCandleStickComponent } from './insights-demo/container/insights-demo-candlestick/insights-demo-candlestick.component';
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
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    DemoComponent,
    InsightsDemoComponent,
    InsightsDemoOverviewComponent,
    InsightsDemoCandleStickComponent,
    PredictionsDemoComponent,
  ],
})
export class DemoModule {
}
