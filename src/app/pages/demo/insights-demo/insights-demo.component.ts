import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../../core/service/app/sidenav.service';

@Component({
  selector: 'app-insights-demo-page',
  styleUrls: ['insights-demo.component.scss'],
  templateUrl: 'insights-demo.component.html',
})
export class InsightsDemoComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.changeMenu('insights');
  }
}
