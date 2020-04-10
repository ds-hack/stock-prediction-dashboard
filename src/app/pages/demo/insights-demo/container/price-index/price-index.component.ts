import { Component } from '@angular/core';

import { InsightsCompanyService } from '../../../../../core/service/core.service';

@Component({
  selector: 'app-insights-demo-price-index-container',
  styleUrls: ['price-index.component.scss'],
  templateUrl: 'price-index.component.html',
})
export class InsightsDemoPriceIndexComponent {
  indices = [
    { name: 'index1', value: 1000000 },
  ];
  dummy = [1, 2, 3, 4];
  colorScheme = {
    domain: ['#5AA454']
  };
  cardColor = '#232837';

  constructor(private insightsCompanyService: InsightsCompanyService) { }
}
