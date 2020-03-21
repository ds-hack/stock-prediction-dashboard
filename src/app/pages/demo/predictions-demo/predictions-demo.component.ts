import { Component } from '@angular/core';

import { SidenavService } from '../../../core/service/sidenav.service';

@Component({
  selector: 'app-predictions-demo-page',
  styleUrls: ['predictions-demo.component.scss'],
  templateUrl: 'predictions-demo.component.html',
})
export class PredictionsDemoComponent {

  constructor(private sidenavService: SidenavService) {}

}
