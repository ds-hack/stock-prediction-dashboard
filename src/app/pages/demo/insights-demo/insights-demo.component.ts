import { Component } from '@angular/core';

import { SidenavService } from '../../../core/service/sidenav.service';

@Component({
  selector: 'app-insights-demo-page',
  styleUrls: ['insights-demo.component.scss'],
  templateUrl: 'insights-demo.component.html',
})
export class InsightsDemoComponent {

  constructor(private sidenavService: SidenavService) {}

}
