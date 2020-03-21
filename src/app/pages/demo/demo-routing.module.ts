import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { InsightsDemoComponent } from './insights-demo/insights-demo.component';
import { PredictionsDemoComponent } from './predictions-demo/predictions-demo.component';


const routes: Routes = [{
  path: '',
  component: DemoComponent,
  children: [
    {
      path: 'insights',
      component: InsightsDemoComponent,
    },
    {
      path: 'predictions',
      component: PredictionsDemoComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
