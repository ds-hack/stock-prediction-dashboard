import { Component } from '@angular/core';

interface Company {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-insights-demo-overview-container',
  styleUrls: ['insights-demo-overview.component.scss'],
  templateUrl: 'insights-demo-overview.component.html',
})
export class InsightsDemoOverviewComponent {
  selected: string;
  companies: Company[] = [
    {value: '0001', viewValue: '株式会社A'},
    {value: '0002', viewValue: '株式会社B'},
    {value: '0003', viewValue: '株式会社C'}
  ];
}
