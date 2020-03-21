import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
