import { NgModule } from '@angular/core';

import { API_SERVICES, APP_SERVICES } from './service/core.service';

@NgModule({
    providers: [
        ...API_SERVICES,
        ...APP_SERVICES,
    ],
})
export class CoreModule {}
