import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { InsightsDemoComponent } from './insights-demo/insights-demo.component';
import { PredictionsDemoComponent } from './predictions-demo/predictions-demo.component';

@NgModule({
  imports: [
    DemoRoutingModule,
  ],
  declarations: [
    DemoComponent,
    InsightsDemoComponent,
    PredictionsDemoComponent,
  ],
})
export class DemoModule {
}
